import styles from "./index.module.scss"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.header}>Welcome to Tictactoe</h1>
        </div>
    )
}
