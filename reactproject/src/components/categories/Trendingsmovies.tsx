import { useState } from "react"
import Fetch from "../../services/Fetch"
import List from "../List";

export default function Trendingmovies(){
    const [datas, setDatas] = useState([])
    const trendingTitle = "Films en tendance"
    const trendingURL = '/trending/movie/week'


    return(
    <>
        <Fetch setDatas={setDatas} URI = {trendingURL}/>
        <List datas={datas} titlecontainer={trendingTitle}/>
    </>)
}