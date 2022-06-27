import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deletePlay, fetchPlay } from "../../api/Play";
import Button from "../../common/components/atoms/Button";
import Logout from "../../common/components/atoms/Logout";
import { Storage } from "../../storage";
import styles from "./index.module.scss";

export default function WaitingRoom() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = Storage.getItem("user");

  const [code, setCode] = useState("");
  const [players, setPlayers] = useState([]);

  async function fetchCode() {
    await fetchPlay(user).then((response) => {
      if (response.status) {
        setCode(response.data?.code);
        setPlayers(response.data);
      }
    });
  }

  useEffect(() => {
    fetchCode();
  });

  const exitWait = () => {
    deletePlay()
      .then((response) => {
        if (response.status) {
          navigate("/play", { state: location.state, replace: true });
          toast("exited succesfully", { type: "success", autoClose: 2000 });
        } else {
          toast("something went wrong", { type: "error", autoClose: 2000 });
        }
      })
      .catch((error) => {
        toast(error, { type: "error", autoClose: 2000 });
      });
  };

  return (
    <div className={styles.waitingRoom}>
      <div className={styles.headerContainer}>
        <h1>Waiting Room</h1>
        <Logout onClick={exitWait} />
      </div>
      <div className={styles.midContainer}>
        <div className={styles.userContainer}>
          <p>Users</p>
          <ol className={styles.orderList}>
            <li>{players["host"]}</li>
            {players["team"] && <li>{players["team"]}</li>}
          </ol>
        </div>
        <p>
          Room Code: <strong>{code}</strong>
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          title={
            players["team"] === "" ? "Waiting For Players" : "Enter the Game"
          }
          isLoading={players["team"] === "" || code === ""}
        />
      </div>
    </div>
  );
}
