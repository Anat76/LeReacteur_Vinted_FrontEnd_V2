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

const App = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [token, setToken] = useState(Cookies.get("tokenVinted") || null);

  const cookieToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("tokenVinted", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("tokenVinted");
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
      />
      <Routes>
        <Route path="/" element={<Home search={search} sort={sort} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup cookieToken={cookieToken} />} />
        <Route path="login" element={<Login cookieToken={cookieToken} />} />
        <Route path="publish" element={<Publish token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;
