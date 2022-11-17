import Topratedmovies from "./categories/Topratedmovies";
import Trendingmovies from "./categories/Trendingsmovies";
import '../styles/list.css'

export interface Imovie {

    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    release_date: string;
    id: number;

}

export interface Idatas {
    datas: Imovie[];
}

export default function Home() {

    return (
        <>
            <Trendingmovies />
            <Topratedmovies />
        </>)
}