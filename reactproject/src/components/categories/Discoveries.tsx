import { useState } from "react";
import Fetchmovie from "../../services/Fetchmovie";
import List from "../List";
import { Idatas } from "../Home";

export default function Discoveries() {
  const [datas, setDatas] = useState<Idatas | null>(null);
  const discoverytitle = "Découvertes";
  const trendingURL = "/discover/movie";

  return (
    <>
      <Fetchmovie setDatas={setDatas} URI={trendingURL} />
      <List datas={datas} titlecontainer={discoverytitle} />
    </>
  );
}
