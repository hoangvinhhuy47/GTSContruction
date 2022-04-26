import { useState } from "react";
import {
  Achievement,
  BannerIntroduce,
  BannerText,
  Clients,
  Counter,
  Gallery,
  Services,
} from "./components";
import styles from "./landingpage.module.scss";

interface Props {}
const tabs = [
  {
    component: BannerIntroduce,
  },
  {
    component: Services,
  },
  {
    component: BannerText,
  },
  {
    component: Gallery,
  },
  {
    component: Counter,
  },
  {
    component: Achievement,
  },
  {
    component: Clients,
  },
];
export const LangdingPage: React.FC<Props> = () => {
  const dataButton = [
    { id: 1, name: "BannerIntroduce" },
    { id: 2, name: "Services" },
    { id: 3, name: "BannerText" },
    { id: 4, name: "Gallery" },
    { id: 5, name: "Counter" },
    { id: 6, name: "Achievement" },
    { id: 7, name: "Clients" },
  ];
  const [indexTab, setIndexTab] = useState<number>(0);
  return (
    <div className={styles.container}>
      <div className={styles.viewButton}>
        {dataButton.map((value, index) => (
          <button
            onClick={() => setIndexTab(index)}
            className={
              indexTab === index ? styles.buttonInActive : styles.button
            }
          >
            {value.name}
          </button>
        ))}
      </div>
      <div className={styles.viewTabs}>{tabs[indexTab].component}</div>
    </div>
  );
};
