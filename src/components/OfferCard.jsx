import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  return (
    <Link to={`offer/${offer._id}`}>
      <article>
        <div>
          {offer.owner.account.avatar.secure_url && (
            <img src={offer.owner.account.avatar.secure_url} />
          )}
          <span>{offer.owner.account.username}</span>
        </div>
        <img src={offer.product_image.secure_url} alt="" />
        <p>{offer.product_price} €</p>
        <div>
          {offer.product_details.map((details, index) => {
            if (details.TAILLE) {
              return <p key={index}>{details.TAILLE}</p>;
            } else if (details.MARQUE) {
              return <p key={index}>{details.MARQUE}</p>;
            } else return null;
          })}
        </div>
      </article>
    </Link>
  );
};
export default OfferCard;
