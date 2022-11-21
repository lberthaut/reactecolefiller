import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Moviedetails from "../Moviedetails";
import Login from "../Login";
import Newuserform from "../Newuserform";
import Mypage from "../Mypage";
import Updateprofile from "../Updateprofile";
import Addmovie from "../Addmovie";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Moviedetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newuser" element={<Newuserform />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/updateprofile" element={<Updateprofile />} />
        <Route path="/addmovie" element={<Addmovie />} />
      </Routes>
    </BrowserRouter>
  );
}
