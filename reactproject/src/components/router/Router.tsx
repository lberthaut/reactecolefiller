import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Moviedetails from "../Moviedetails";
import Login from "../Login";
import Newuserform from "../Newuserform";
import Mypage from "../Mypage";
import Updateprofile from "../Updateprofile";
import Addmovie from "../Addmovie";
import Discoveries from "../categories/Discoveries";
import Usetoken from "../../app/Utils/Usetoken";

// const AuthRoutes = () => {
//   const hasToken = Usetoken();

//   return hasToken ? <Outlet /> : <Navigate to={"/login"} />;
// };

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        //PUBLIC ROUTES
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Moviedetails />} />
        <Route path="/discoveries" element={<Discoveries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newuser" element={<Newuserform />} />
        //PRIVATE ROUTES
        {/* <Route element={<AuthRoutes />}> */}
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/updateprofile" element={<Updateprofile />} />
        <Route path="/addmovie" element={<Addmovie />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
