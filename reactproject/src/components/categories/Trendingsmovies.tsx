import { useState } from "react"
import Fetchmovie from "../../services/Fetchmovie"
import List from "../List";
import { Imovie } from "../Home";


export default function Trendingmovies() {
    const [datas, setDatas] = useState<Imovie[]>([])
    const trendingTitle = "Films tendance de la semaine"
    const trendingURL = '/trending/movie/week'


    return (
        <>
            <Fetchmovie setDatas={setDatas} URI={trendingURL} />
            <List datas={datas} titlecontainer={trendingTitle} />
        </>)
}