import { Link } from "react-router-dom"

import Button from "../../common/components/atoms/Button"
import styles from "./index.module.scss"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.header}>Welcome to Tictactoe</h1>
            <div className={styles.inputContainer}>
                <section>
                    <p>Enter a username:</p>
                    <input 
                        name="username" 
                        className={styles.usernameInput} 
                        placeholder="Enter a username" 
                    />
                </section>
                <div className={styles.nextButton}>
                    <Link to="/play"><Button title={"Next"} isLoading={false} /></Link>
                </div>
            </div>
        </div>
    )
}
