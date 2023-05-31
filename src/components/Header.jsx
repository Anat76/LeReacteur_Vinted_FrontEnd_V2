import logoVinted from "../assets/img/logoVinted.png";
import { Link } from "react-router-dom";

const Header = ({ token, cookieToken }) => {
  return (
    <header>
      <Link to="/">
        <img src={logoVinted} alt="" />
      </Link>

      <section>
        {token ? (
          <button
            onChange={() => {
              cookieToken(null);
            }}
          >
            Deconnexion
          </button>
        ) : (
          <>
            <Link to={"/login"}>
              <button>Se connecter</button>
            </Link>
            <Link to={"/signup"}>
              <button>S'inscrire</button>
            </Link>
          </>
        )}
        <Link to={"/publish"}>
          <button>Vends tes articles</button>
        </Link>
      </section>
    </header>
  );
};
export default Header;
