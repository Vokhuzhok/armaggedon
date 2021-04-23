import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <div>
            <h1>ARMAGGEDON V</h1>
            <p>Сервис мониторинга и уничтожения астероидов,<br/> опасно подлетающих к Земле</p>
            <NavLink to="/">
                Астероиды
            </NavLink>
            <NavLink to="/destructions">
                Уничтожение
            </NavLink>
            <hr/>
        </div>
    )
}

export default Header;