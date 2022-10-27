import {API_KEY} from '../app/App'


interface Isetdataprops{
    setDatas: (data: []) => void;
    URI: string;
}



export default function Fetch(props:Isetdataprops){

    fetch(`https://api.themoviedb.org/3${props.URI}?api_key=${API_KEY}`)
    .then(resp => resp.json())
    .then(data => props.setDatas(data.results))
    return(
        <></>
    )
}