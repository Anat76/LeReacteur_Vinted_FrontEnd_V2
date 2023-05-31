import { useState, useEffect } from "react";
import axios from "axios";
import OfferCard from "../components/OfferCard";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataOffers, setDataOffers] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/offers");
        setDataOffers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <>
      <h1>Home</h1>
      <h2>Offres disponible : {dataOffers.count}</h2>
      {dataOffers.offer.map((offer) => {
        return <OfferCard key={offer._id} offer={offer} />;
      })}
    </>
  );
};

export default Home;
