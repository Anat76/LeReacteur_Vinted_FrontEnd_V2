import logoVinted from "../assets/img/logoVinted.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to={"/"}>
        <img src={logoVinted} alt="" />
      </Link>
      <Link to={"/offer"}>
        <button>Vends tes articles</button>
      </Link>
      {/* <Link to={}></Link> */}
    </>
  );
};
export default Header;
