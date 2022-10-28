import { useState } from "react";
import { useParams } from "react-router-dom";
import Fetchmovie from "../services/Fetchmovie";
import { Imovie } from './Home';



export default function Moviedetails() {
    const [datas, setMoviedatas] = useState<Imovie | null>(null)
    const params = useParams();
    const movieURL = `/movie/${params.id}`;

    return (
        <>
            {console.log('datas', datas)}
            {console.log('url', movieURL)}
            {console.log('id', params.id)}
            <Fetchmovie setDatas={setMoviedatas} URI={movieURL} />
            <div className="movie_details_block">
                <img alt="poster du film" className="movie_poster" src={`https://image.tmdb.org/t/p/w500${datas?.poster_path}`} />

            </div>
        </>
    )
}