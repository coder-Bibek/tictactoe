import { useState } from "react";

import Button from "../../common/components/atoms/Button";
import styles from "./index.module.scss";

export default function Play() {
    const [user, setUser] = useState("Prayush");

    return (
        <div className={styles.homeContainer}>
        <h1 className={styles.header}>Welcome to Tictactoe</h1>
        <p>Current Player: {user}</p>
        <div className={styles.playOptions}>
            <Button title={"Play Single"} isLoading={false} />
            <Button title={"Host a Room"} isLoading={false} />
            <Button title={"Join a Room"} isLoading={false} />
        </div>
    </div>
    )
}