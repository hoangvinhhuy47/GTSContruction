import { useContext } from "react";
import { Link } from "react-router-dom";
import { TitleContext } from "../context";
import styles from "./header.module.scss";
interface Props {}
export const HeaderLayout: React.FC<Props> = () => {
  const { title } = useContext(TitleContext);
  return (
    <div className={styles.container}>
      <Link to={""} className={styles.title}>
        {title}
      </Link>
      <div className={styles.account}></div>
    </div>
  );
};
