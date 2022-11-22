import { useState } from "react";
import { useParams } from "react-router-dom";
import Fetchmovie from "../services/Fetchmovie";
import { Imovie } from "./Home";
import "../styles/moviedetails.css";
import Videos from "./Videoscontainer";
import Starrating from "./Starrating";

export interface Ivideos {
  id: number;
  results: Ivideo[];
}

interface Ivideo {
  key: string;
}

export default function Moviedetails() {
  const [datas, setMoviedatas] = useState<Imovie | null>(null);
  const [datasVideos, setDatasVideos] = useState<Ivideos | null>(null);
  const params = useParams();
  const movieURL = `/movie/${params.id}`;
  const movievideoURL = `/movie/${params.id}/videos`;

  let formatbudget = new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "DOL",
  }).format(datas?.budget!);

  return (
    <>
      <Fetchmovie setDatas={setMoviedatas} URI={movieURL} />
      <Fetchmovie setDatas={setDatasVideos} URI={movievideoURL} />
      <div className="movie_details_block">
        <div className="moviedetails_poster_container">
          <img
            alt="poster du film"
            className="movie_poster"
            src={`https://image.tmdb.org/t/p/w500${datas?.poster_path}`}
          />
        </div>
        <div className="moviedetails_text_container">
          <h1 className="moviedetails_title">{datas?.title}</h1>
          <p className="moviedetails_tagline">{datas?.tagline}</p>
          <p className="moviedetails_overview_title">Résumé:</p>
          <p className="moviedetails_overview">{datas?.overview}</p>
          <p className="moviedetails_date_title">Date de sortie</p>
          <p className="moviedetails_releasedate">{datas?.release_date}</p>
          {formatbudget === "0,00 DOL" ? null : (
            <>
              <p className="moviedetails_budget_title">Budget:</p>
              <p className="moviedetails_budget">{formatbudget}</p>
            </>
          )}
        </div>
      </div>
      <Videos datas={datasVideos} />
      {/* <Starrating datas={datas} /> */}
    </>
  );
}
