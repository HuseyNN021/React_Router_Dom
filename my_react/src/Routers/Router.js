import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../Page/About'
import Home from '../Page/Home'
import Error from '../Page/Error'
import Menu from '../components/Menu'
import Main from '../Page/Main'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/' element={<Main/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers