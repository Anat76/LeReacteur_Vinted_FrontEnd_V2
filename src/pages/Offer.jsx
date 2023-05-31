import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [dataOffer, setDataOffer] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/offer/${id}`);
        setDataOffer(result.data);
        console.log(dataOffer);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <h1>loading ...</h1>
  ) : (
    <>
      <div>
        <img src={dataOffer.product_image.secure_url} alt="" />
        <p>{dataOffer.product_price} €</p>
        <div>
          {dataOffer.product_details.map((details, index) => {
            return (
              <div key={index}>
                <p>{details.MARQUE}</p>
                <p>{details.ETAT}</p>
                <p>{details.COULEUR}</p>
                <p>{details.EMPLACEMENT}</p>
              </div>
            );
          })}
          <p>{dataOffer.product_description}</p>
          <div>
            {dataOffer.owner.account.avatar && (
              <img src={dataOffer.owner.account.avatar.secure_url} alt="" />
            )}
            <span>{dataOffer.owner.account.username}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
