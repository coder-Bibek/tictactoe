import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../../api/User";

import Button from "../../common/components/atoms/Button";
import styles from "./index.module.scss";

export default function Home() {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState("");

  const handleClick = () => {
    createUser(username).then((response) => {
      if (response.status) {
        navigate(from, { replace: true });
        toast("Logged in succesfully", { type: "success", autoClose: 2000 });
      } else {
        toast("Already exists", { type: "error", autoClose: 2000 });
      }
    });
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
            <Button
              title={"Next"}
              isLoading={username === "" || username.length < 3}
              onClick={handleClick}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
