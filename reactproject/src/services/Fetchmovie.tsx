import { API_KEY } from '../app/App'
import { Imovie } from '../components/Home'

interface Isetdataprops {
    setDatas: ((data: []) => void) | ((data: Imovie | null) => void);
    URI: string;
}

export default function Fetchmovie(props: Isetdataprops) {

    fetch(`https://api.themoviedb.org/3${props.URI}?api_key=${API_KEY}&language=fr-fr&include_image_language=fr`)
        .then(resp => resp.json())
        .then(data => {
            props.setDatas(data.results)
            console.log(data)
        });
    return (
        <></>
    )
}