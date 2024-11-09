import styles from "./Home.module.css"

export function Home() {
    return (
        <div className={styles["main-content"]}>
            <img src="/images/home.jpg" alt="Frog in Rainforest"></img>
            <p>At Hypers we are focused on the future of this planet&apos;s rainforests. That is why our products use materials that are 100% sustainable. We also donate a tree for every dollar spent on our site.</p>
        </div>
    )
}