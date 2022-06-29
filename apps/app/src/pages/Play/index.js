import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createPlay } from "../../api/Play";
import { findRoom } from "../../api/Room";
import { deleteUser } from "../../api/User";
import Button from "../../common/components/atoms/Button";
import Logout from "../../common/components/atoms/Logout";
import ReactModal from "../../common/components/atoms/Modal";
import { Storage } from "../../storage";
import styles from "./index.module.scss";

export default function Play() {
  const [error, setError] = useState("");
  const [host, setHost] = useState(false);
  const [open, setOpen] = useState(false);
  const [room, setRoom] = useState("");
  const [hoster, setHoster] = useState("");
  const [loading, setLoading] = useState(false);
  const user = Storage.getItem("user");

  let navigate = useNavigate();
  let location = useLocation();

  const removeUser = () => {
    deleteUser()
      .then((response) => {
        if (response.status) {
          navigate("/", { state: location.state, replace: true });
          toast("Logout Successfully", { type: "success", autoClose: 2000 });
        } else {
          toast("Somethig went wrong", { type: "error", autoClose: 2000 });
        }
      })
      .catch((error) => {
        toast(error, { type: "error", autoClose: 2000 });
      });
  };

  const hostClick = () => {
    setHost(true);

    createPlay(user).then((response) => {
      if (response.status) {
        navigate("/wait", { state: location.state, replace: true });
        toast("Room created succesfully", { type: "success", autoClose: 2000 });
        setHost(false);
      } else {
        toast("Already exists", { type: "error", autoClose: 2000 });
        setHost(false);
      }
    });
  };

  const handleLobby = () => {
    setLoading(true);
    findRoom(room, hoster).then((response) => {
      setLoading(false);
      if (!response.status) {
        setError(response.message);
      }
    });
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
        <Button title={"Host a Room"} isLoading={host} onClick={hostClick} />
        <Button
          title={"Join a Room"}
          isLoading={false}
          onClick={() => setOpen(true)}
        />
      </div>
      <ReactModal isOpen={open}>
        <div className={styles.closeButton}>
          <Button title={"close"} onClick={() => setOpen(false)} />
        </div>
        <p className={styles.errorMessage}>{error}</p>
        <div className={styles.modalInputContainer}>
          <input
            type="number"
            placeholder="Enter Room Code"
            value={room}
            onChange={(e) => {
              setRoom(e.target.value);
              setError("");
            }}
          />
          <input
            placeholder="Enter Host username"
            value={hoster}
            onChange={(e) => {
              setHoster(e.target.value);
              setError("");
            }}
          />
          <Button
            title={"Enter Lobby"}
            isLoading={room === "" || hoster === "" || loading}
            onClick={handleLobby}
          />
        </div>
      </ReactModal>
    </div>
  );
}
