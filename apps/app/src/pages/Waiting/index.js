import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deletePlay } from "../../api/Play";
import Logout from "../../common/components/atoms/Logout";
import styles from "./index.module.scss";

export default function WaitingRoom() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <div className={styles.WaitingRoom}>
      <h1>Waiting Room</h1>
      <Logout onClick={exitWait} />
    </div>
  );
}
