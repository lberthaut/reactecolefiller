import { useState } from "react"
import Fetchmovie from "../../services/Fetchmovie"
import List from "../List";
import { Imovie } from "../Home";


export default function Topratedmovies() {
    const [datas, setDatas] = useState<Imovie[]>([])
    const topratedTitle = "Films les mieux notés"
    const topratedURL = '/movie/top_rated'


    return (
        <>
            <Fetchmovie setDatas={setDatas} URI={topratedURL} />
            <List datas={datas} titlecontainer={topratedTitle} />
        </>)
}