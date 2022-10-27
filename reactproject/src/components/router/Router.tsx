import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../Header'

export default function Router() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
{/*                 <Route path="/" element={<Home/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}