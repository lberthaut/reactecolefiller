import { useNavigate } from "react-router-dom";
import Loginform from "./Loginform";
import axios from "axios";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login_container">
        <h2 className="login_title">Se connecter</h2>
        <Loginform />
        <p>Si vous n'avez pas encore de compte</p>
        <button onClick={() => navigate("/newuser")} className="newuser_button">
          S'enregistrer
        </button>
      </div>
    </>
  );
}
