import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../../common/components/atoms/Button";
import { Storage } from "../../storage";
import styles from "./index.module.scss";

export default function Home() {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState("");

  const handleClick = () => {
    Storage.setItem("user", username);
    navigate(from, { replace: true });
    if (username) {
        toast("Logged in succesfully", { type: "success" });
    }
  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <div className={styles.nextButton}>
          <Link to="/play">
            <Button title={"Next"} isLoading={username==="" || username.length < 3} onClick={handleClick} />
          </Link>
        </div>
      </div>
    </div>
  );
}
