import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <header>
            <h1>HYPERS</h1>
            <nav>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/shop" activeClassName="active">Shop</NavLink>
                <NavLink to="/cart" activeClassName="active">Cart</NavLink>
            </nav>
        </header>
    )
}