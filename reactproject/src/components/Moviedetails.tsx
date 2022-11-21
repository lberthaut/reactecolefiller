import { useState } from "react";
import { useParams } from "react-router-dom";
import Fetchmovie from "../services/Fetchmovie";
import { Imovie } from './Home';
import '../styles/moviedetails.css'



export default function Moviedetails() {
    const [datas, setMoviedatas] = useState<Imovie | null>(null);
    const params = useParams();
    const movieURL = `/movie/${params.id}`;
    console.log(datas);

    let formatbudget = new Intl.NumberFormat('us-US', { style: 'currency', currency: 'DOL' }).format(datas?.budget!)


    return (
        <>
            <Fetchmovie setDatas={setMoviedatas} URI={movieURL} />
            <div className="movie_details_block">
                <div className="moviedetails_poster_container">
                    <img alt="poster du film" className="movie_poster" src={`https://image.tmdb.org/t/p/w500${datas?.poster_path}`} />
                </div>
                <div className="moviedetails_container">
                    <h1 className="moviedetails_title">{datas?.title}</h1>
                    <p className="moviedetails_overview">{datas?.overview}</p>
                    <p className="moviedetails_releasedate">{datas?.release_date}</p>
                    <p className="moviedetails_tagline">{datas?.tagline}</p>
                    <p className="moviedetails_budget">{formatbudget}</p>
                </div>
            </div>
        </>
    )
}