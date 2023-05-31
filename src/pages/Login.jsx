import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  return (
    <section>
      <h1>S'inscrire</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      ></form>
    </section>
  );
};
export default Login;
