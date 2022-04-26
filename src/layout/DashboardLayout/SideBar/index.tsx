import Button from "components/Button";
import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TitleContext } from "../context";
import styles from "./sidebar.module.scss";
interface Props {}
export const SideBarLayout: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { setTitle, title } = useContext(TitleContext);
  return (
    <div className={styles.container}>
      <p className={styles.title}>GTS CONSTRUCTION</p>
      <Link
        onClick={() => setTitle("OverView")}
        to={"/overview"}
        className={title === "OverView" ? styles.buttonActive : styles.button}
      >
        OverView
      </Link>
      <Link
        onClick={() => setTitle("LandingPage")}
        to={"/landingpage"}
        className={
          title === "LandingPage" ? styles.buttonActive : styles.button
        }
      >
        LandingPage
      </Link>
      <Link
        // onClick={() => setTitle("OverView")}
        to={"#"}
        className={styles.button}
      >
        Account
      </Link>
      <Link
        // onClick={() => setTitle("OverView")}
        to={"#"}
        className={styles.button}
      >
        Setting
      </Link>
    </div>
  );
};
