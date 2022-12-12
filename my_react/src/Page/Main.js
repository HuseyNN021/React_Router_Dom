import Menu from "../components/Menu"
import './Main.css'
const Main = () => {
    return (
        <>
            <Menu />
            <div className="Main1">
                <h1>React</h1>
                <p>Biz ona handleSubmit funksiyasını ötürə bilərik, hansıki default əməliyyatı ləğv edəcək və form məlumatlarını emal edəcək:
                    serverə göndərəcək, state-də saxlayacaq
                </p>
            </div>
        </>
    )
}
export default Main