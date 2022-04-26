import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TitleContext } from "./context";
import { HeaderLayout } from "./Header";
import styles from "./index.module.scss";
import { SideBarLayout } from "./SideBar";
interface Props {}
export const DashboardLayout: React.FC<Props> = () => {
  const [title, setTitle] = useState<string>("OverView");
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      <div className={styles.container}>
        <SideBarLayout />
        <div className={styles.screen}>
          <HeaderLayout />
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </TitleContext.Provider>
  );
};
