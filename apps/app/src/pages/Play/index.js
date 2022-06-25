import { toast } from "react-toastify";
import Button from "../../common/components/atoms/Button";
import Logout from "../../common/components/atoms/Logout";
import { Storage } from "../../storage";
import styles from "./index.module.scss";

export default function Play() {
  const user = Storage.getItem("user");

  const removeUser = () => {
    Storage.removeItem("user");
    toast("Logout Successfully", { type: "success", autoClose: 2000 });
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.logoutContainer}>
        <Logout onClick={removeUser} />
      </div>
      <h1 className={styles.header}>Welcome to Tictactoe</h1>
      <p>Current Player: {user}</p>
      <div className={styles.playOptions}>
        <Button title={"Play Single"} isLoading={false} />
        <Button title={"Host a Room"} isLoading={false} />
        <Button title={"Join a Room"} isLoading={false} />
      </div>
    </div>
  );
}
