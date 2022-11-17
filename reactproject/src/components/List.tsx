import '../styles/list.css'
import { Imovie } from '../components/Home'
import { Idatas } from '../components/Home'
import { NavLink } from 'react-router-dom';

interface Idataprops {
    titlecontainer: string;
    datas: Idatas | null;
}


export default function List(props: Idataprops) {

    return (
        <>
            <div className="movies_container">
                <p className="title_list">{props.titlecontainer}</p>
                <div className="movies_list_container">
                    {props?.datas?.results.map((movie: Imovie) =>
                        <NavLink className="movie_container_link link" to={`/movie/${movie.id}`}>
                            <div className="movie_poster_container">
                                <img alt="poster du film" className="movie_poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            </div>
                            <p className="movie_title">{movie.title}</p>
                        </NavLink>
                    )}
                </div>
            </div>
        </>
    )
}