import { Link } from "react-router-dom"


const NavBar = () => {


    return (
        <nav>
            <Link to='/'> Home </Link>
            <Link to='/signin'> Sign In </Link>
            <Link to='/register'> Register </Link>
        </nav>
    )
}

export default NavBar