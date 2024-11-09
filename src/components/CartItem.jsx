import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

export function CartItem({ product, handleClick }) {
    return (
        <div className={styles.item}>
            <img src={product.image} alt={product.title} />
            <div className={styles.details}>
                <div className={styles.title}>{product.title}</div>
                <div>Price: ${product.price}</div>
                <div>Quantity: {product.quantity}</div>
                <div>Total: ${product.price * product.quantity}</div>
            </div>
            <button onClick={() => handleClick(product)}>Remove</button>
        </div>
    );
}


CartItem.propTypes = {
    product: PropTypes.object,
    handleClick: PropTypes.func
}