import PropTypes from "prop-types"
import { Item } from "../../components/Item"
import styles from "./Shop.module.css"

export function Shop({ items }) {
    return (
        <div className={styles["main-content"]}>
            {items.map((item, index) => (
                <Item
                key={index}
                product={item}>
                </Item>
            ))}
        </div>
    )
}

Shop.propTypes = {
    items: PropTypes.object
}