import { useState } from 'react'
import Menu from '../components/Menu'
import './Home.css'
const Home = () => {
    let [state,setState]=useState({
        name: "",
        surname: "",
        age: 0
    })
    const clickBtn=()=>{
        setState({
            name: "Huseyn",
            surname: "Hesenov",
            age: 19
        })
    }
    return (
        <>
            <Menu/>
            <div className="home">
                <h1>React Page_Home</h1>
                <div>blog-1</div>
                <div>blog-2</div>
                <div>blog-3</div>
                <h6>React</h6>
                <button onClick={clickBtn} type='Click'>Click</button>
                <h2>{state.name}</h2>
                <h2>{state.surname}</h2>
                <h2>{state.age}</h2>
            </div>

        </>
    )
}
export default Home