import React from "react";
import "./Login.css";
import { accessUrl } from "../../spotify/spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://medialeaks.ru/wp-content/uploads/2020/07/kh-spotify-768x432.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
