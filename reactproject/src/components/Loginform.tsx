import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Ilogin {
  email: string;
  password: string;
}

export default function Loginform() {
  const [userDatas, setUserDatas] = useState<Ilogin>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function Postaxios() {
    axios
      .post("https://api-ri7.herokuapp.com/api/users/login", userDatas)
      .then((resp) => {
        sessionStorage.setItem("token", resp?.data.token);
        navigate("/mypage");
      })
      .catch((error) => console.log("error !", error.response.data));
  }

  function Handlesubmit(e: React.FormEvent) {
    e.preventDefault();
    Postaxios();
  }

  return (
    <>
      <form className="formnewuser" onSubmit={Handlesubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={userDatas?.email}
          onChange={(e) =>
            setUserDatas({ ...userDatas, email: e.target.value })
          }
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={userDatas?.password}
          onChange={(e) =>
            setUserDatas({ ...userDatas, password: e.target.value })
          }
        />
        <button className="login_button">Se Connecter !</button>
      </form>
    </>
  );
}
