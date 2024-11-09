import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Item.module.css";

export function Item( { product, handleClick }) {
    const [amount, setAmount] = useState(1);

    function quantityChanged(e) {
        e.preventDefault();
        setAmount(e.target.value);
    }

    return(
        <div className={styles.item}>
            <img src={product.image} alt={product.title} />
            <div>{product.title}</div>
            <div>Price: ${product.price}</div>
            <div className={styles["item-quantity"]}>
                <label>Quantity:</label>
                <input type="number" value={amount} onChange={quantityChanged} />
            </div>
            <button onClick={() => handleClick(product, amount)}>Add To Cart</button>
        </div>
    )
}

Item.propTypes = {
    product: PropTypes.object,
    handleClick: PropTypes.func
}