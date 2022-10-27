import '../styles/list.css'

interface Idataprops{
    datas: string[];
    titlecontainer: string;
}


export default function List(props: Idataprops) {
    function click(){
        console.log(props.datas)
    }
    return(
        <>
        <div className="trendingmovie_container">
            <p className="title_lists">{props.titlecontainer}</p>
            <button onClick={click}>console.log</button>
            <div className="movies_container">
                {props.datas.map(movie => {
                    <p>{movie.title}</p>
                })}
            </div>
        </div>
        </>
    )
}