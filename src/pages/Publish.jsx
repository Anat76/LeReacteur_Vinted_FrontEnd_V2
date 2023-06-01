import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState();
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");

  return token ? (
    <>
      <h1>Publier une annonce</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("condition", condition);
            formData.append("city", city);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);
            formData.append("picture", picture);

            const response = await axios.post(
              "http://localhost:3000/offer/publish",
              formData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log(response.data);
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        <div>
          <p>Titre</p>
          <input
            type="text"
            placeholder="ex: Chemise Sezanne Verte"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
          <p>Decris ton article</p>
          <textarea
            type="text"
            placeholder="ex: Porté quelques fois, taille correctement"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          />
        </div>
        <div>
          <p>Marque</p>
          <input
            type="text"
            placeholder="ex: Zara"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            value={brand}
          />
          <p>Taille</p>
          <input
            type="text"
            placeholder="ex: L / 40 / 12"
            onChange={(event) => {
              setSize(event.target.value);
            }}
            value={size}
          />
          <p>Couleur</p>
          <input
            type="text"
            placeholder="ex: Fushia"
            onChange={(event) => {
              setColor(event.target.value);
            }}
            value={color}
          />
          <p>Etat</p>
          <input
            type="text"
            placeholder="ex: Neuf avec etiquette"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
            value={condition}
          />
          <p>Lieu</p>
          <input
            type="text"
            placeholder="ex: Paris"
            onChange={(event) => {
              setCity(event.target.value);
            }}
            value={city}
          />
        </div>
        <div>
          <p>Price</p>
          <input
            type="number"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
          />
        </div>
        <input type="submit" value={"Ajouter mon annonce"} />
      </form>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
