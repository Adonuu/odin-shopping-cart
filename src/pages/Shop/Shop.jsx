import PropTypes from "prop-types"
import { Item } from "../../components/Item/Item"
import styles from "./Shop.module.css"

export function Shop({ items, handleClick }) {
    return (
        <div className={styles["main-content"]}>
            {items.map((item, index) => (
                <Item
                key={index}
                product={item}
                handleClick={handleClick}>
                </Item>
            ))}
        </div>
    )
}

Shop.propTypes = {
    items: PropTypes.array,
    handleClick: PropTypes.func
}