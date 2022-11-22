import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface Inewuser {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  postalCode: string;
  avatar: string;
  birthday: string;
}

export default function Newuserform() {
  const [userDatas, setUserDatas] = useState<Inewuser>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    postalCode: "",
    avatar: "",
    birthday: "",
  });
  const navigate = useNavigate();

  function Postaxios() {
    axios
      .post("https://api-ri7.herokuapp.com/api/users/register", userDatas)
      .then((resp) => console.log("response", resp))
      .catch((error) => console.log("error !", error.response.data));
  }

  function Navigatetologin() {
    navigate("/login");
  }

  function handleSubmit() {
    Postaxios();
    Navigatetologin();
  }

  return (
    <>
      <form className="formnewuser" onSubmit={handleSubmit}>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          value={userDatas?.firstname}
          onChange={(e) =>
            setUserDatas({ ...userDatas, firstname: e.target.value })
          }
        />
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          id="lastname"
          value={userDatas?.lastname}
          onChange={(e) =>
            setUserDatas({ ...userDatas, lastname: e.target.value })
          }
        />
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
        <label htmlFor="city">Ville</label>
        <input
          type="text"
          id="city"
          value={userDatas?.city}
          onChange={(e) => setUserDatas({ ...userDatas, city: e.target.value })}
        />
        <label htmlFor="postalCode">Code postal</label>
        <input
          type="text"
          id="postalCode"
          value={userDatas?.postalCode}
          onChange={(e) =>
            setUserDatas({ ...userDatas, postalCode: e.target.value })
          }
        />
        <label htmlFor="avatar">Lien d'une photo</label>
        <input
          type="text"
          id="avatar"
          value={userDatas?.avatar}
          onChange={(e) =>
            setUserDatas({ ...userDatas, avatar: e.target.value })
          }
        />
        <label htmlFor="birthday">Date d'anniversaire</label>
        <input
          type="number"
          id="birthday"
          value={userDatas?.birthday}
          onChange={(e) =>
            setUserDatas({ ...userDatas, birthday: e.target.value })
          }
        />
        <button type="submit">Valider !</button>
      </form>
    </>
  );
}
