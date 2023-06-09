import logoVinted from "../assets/img/logoVinted.png";
import { Link } from "react-router-dom";

const Header = ({
  token,
  cookieToken,
  search,
  setSearch,
  sort,
  setSort,
  cookieId,
}) => {
  return (
    <header className="container">
      <Link to="/">
        <img src={logoVinted} alt="" />
      </Link>

      <div className="search">
        <input
          type="text"
          placeholder="Rechercher un article"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
        <input
          type="checkbox"
          onChange={(event) => {
            setSort(!sort);
          }}
          id="sort"
        />
        <label htmlFor="sort">Trier par prix croissant/decroissant</label>
      </div>

      <section>
        {token ? (
          <button
            onClick={() => {
              cookieToken(null);
              cookieId(null);
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
