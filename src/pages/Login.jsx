import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ cookieToken, cookieId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <section>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const result = await axios.post(
              "http://localhost:3000/user/login",
              {
                email: email,
                password: password,
              }
            );
            if (result.data.token) {
              cookieToken(result.data.token);
              cookieId(result.data._id);
              navigate("/");
            }
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="votre mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <button type="submit">Se connecter</button>
      </form>
    </section>
  );
};
export default Login;
