import PropTypes from "prop-types";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css"

export function Cart ({ cart, handleClick }) {

    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div className={styles.cart}>
            <h2>Cart</h2>
            {cart.map((item, index) => (
                <CartItem
                key={index}
                product={item}
                handleClick={handleClick}>
                </CartItem>
            ))}
            <div className={styles.total}>Total: ${total}</div>
            <button>Checkout</button>
        </div>
    )
}


Cart.propTypes = {
    cart: PropTypes.array,
    handleClick: PropTypes.func
}