import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'
import Moviedetails from '../Moviedetails'

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Moviedetails />} />
            </Routes>
        </BrowserRouter>
    )
}