import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = ({ cookieToken, cookieId }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  return (
    <section>
      <h1>S'incrire</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
              try {
                const response = await axios.post(
                  "http://localhost:3000/user/signup",
                  {
                    username: username,
                    email: email,
                    password: password,
                    newsletter: newsletter,
                  }
                );
                setErrorMessage("");
                if (response.data.token) {
                  cookieToken(response.data.token);
                  cookieId(response.data._id);
                  navigate("/");
                } else
                  setErrorMessage(
                    "Un problème est survenue ressayé ulterieurement !"
                  );
              } catch (error) {
                console.log(error.response);
                if (error.response.request.status === 409) {
                  setErrorMessage("Ce mail existe déja");
                }
              }
            } else {
              setErrorMessage("Vos mots de passe ne sont pas identiques !");
            }
          } else setErrorMessage("Veuillez remplir tous les champs");
        }}
      >
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input
          type="password"
          placeholder="confirm password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          value={confirmPassword}
        />
        <input
          type="checkbox"
          onChange={() => {
            setNewsletter(!newsletter);
          }}
          id="newsletter"
        />
        <label htmlFor="newsletter">S'inscrire à la newsletter</label>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <p>{errorMessage}</p>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to={"/login"}>
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </Link>
    </section>
  );
};
export default Signup;
