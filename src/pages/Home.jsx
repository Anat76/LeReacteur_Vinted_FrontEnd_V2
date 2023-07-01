import { useState, useEffect } from "react";
import axios from "axios";
import OfferCard from "../components/OfferCard";
import hero from "../assets/img/hero.jpg";
import { Link } from "react-router-dom";

const Home = ({ search, sort }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataOffers, setDataOffers] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let sortsearch = "price-asc";
      if (sort === true) {
        sortsearch = "price-desc";
      }
      try {
        const response = await axios.get(
          `http://localhost:3000/offers?title=${search}&sort=${sortsearch}`
        );
        setDataOffers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, sort]);
  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <main>
      <div className="hero">
        <img src={hero} alt="" />
        <div>
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <Link to={"/publish"}>
            <button>Commencer à vendre</button>
          </Link>
        </div>
      </div>
      {/* {dataOffers.offer.map((offer) => {
        return <OfferCard key={offer._id} offer={offer} />;
      })} */}
    </main>
  );
};

export default Home;
