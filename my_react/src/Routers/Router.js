import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../Page/About'
import Home from '../Page/Home'
import Error from '../Page/Error'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers