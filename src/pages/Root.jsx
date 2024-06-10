import "../App.css";
import { Outlet,Link } from "react-router-dom";
const Root =()=>{

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/discografia">Discos</Link>
                    </li>
                    <li>
                        <Link to="/conciertos">Conciertos</Link>
                    </li>
                    <li>
                        <Link to="/videos">Videos</Link>
                    </li>
                    <li>
                        <Link to="/press">Press Kit</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};

export default Root;