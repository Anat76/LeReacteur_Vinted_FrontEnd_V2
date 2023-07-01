import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { useState } from "react";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

const App = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [token, setToken] = useState(Cookies.get("tokenVinted") || null);
  const [cookieIdUser, setCookieIdUser] = useState(
    Cookies.get("idUserVinted") || null
  );

  const cookieToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("tokenVinted", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("tokenVinted");
    }
  };

  const cookieId = (cookieIdUser) => {
    if (cookieIdUser) {
      setCookieIdUser(cookieIdUser);
      Cookies.set("idUserVinted", cookieIdUser, { expires: 7 });
    } else {
      setCookieIdUser(null);
      Cookies.remove("idUserVinted");
    }
  };
  return (
    <Router>
      <Header
        token={token}
        cookieToken={cookieToken}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        cookieId={cookieId}
      />
      <Routes>
        <Route path="/" element={<Home search={search} sort={sort} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup cookieToken={cookieToken} cookieId={cookieId} />}
        />
        <Route
          path="/login"
          element={<Login cookieToken={cookieToken} cookieId={cookieId} />}
        />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route
          path="/payment"
          element={<Payment token={token} cookieIdUser={cookieIdUser} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
