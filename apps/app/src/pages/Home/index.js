import Button from "../../common/components/atoms/Button"
import styles from "./index.module.scss"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.header}>Welcome to Tictactoe</h1>
            <div className={styles.inputContainer}>
                <div>
                    <p>Enter a username:</p>
                    <input 
                        name="username" 
                        className={styles.usernameInput} 
                        placeholder="Enter a username" 
                    />
                </div>
                <div className={styles.nextButton}>
                    <Button title={"Next"} isLoading={false} />
                </div>
            </div>
        </div>
    )
}
