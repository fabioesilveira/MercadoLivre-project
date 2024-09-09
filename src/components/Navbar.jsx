import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <Link to="/">Playstation</Link>
            <Link to="/xbox">Xbox</Link>
            <Link to="/nintendo">Nintendo</Link>
        </nav>
    )
}

export default Navbar