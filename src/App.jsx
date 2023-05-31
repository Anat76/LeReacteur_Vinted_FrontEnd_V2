import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { useState } from "react";

const App = () => {
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
      <Header token={token} cookieToken={cookieToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup cookieToken={cookieToken} />} />
        <Route path="login" element={<Login cookieToken={cookieToken} />} />
      </Routes>
    </Router>
  );
};

export default App;
