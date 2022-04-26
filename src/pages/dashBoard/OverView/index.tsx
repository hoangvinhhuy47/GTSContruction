import { ICSearch } from "assets/svg";
import styles from "./overview.module.scss";

import BootstrapTable from "react-bootstrap-table-next";
import Pagination from "react-js-pagination";
import { Table } from "components/Tables";
// import "bootstrap/dist/css/bootstrap.min.css";

interface Props {}
export const productsGenerator = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push({
      id: i,
      name: `Item name ${i}`,
      descriptions: `descriptions ${i}`,
      date: `0${i}:20:00 20/11/202${i}`,
      status: `status ${i}`,
    });
  }
  return items;
};

const products = productsGenerator();

const columns = [
  {
    dataField: "id",
    text: "STT",
    headerStyle: {
      width: "80px",
    },
    sort: true,
  },

  {
    dataField: "name",
    text: "Name",
    headerStyle: () => ({
      width: "250px",
    }),
  },
  {
    dataField: "descriptions",
    text: "Descriptions",
    headerStyle: () => ({
      width: "450px",
    }),
  },
  {
    dataField: "date",
    text: "Create Date",
    headerStyle: () => ({
      width: "200px",
    }),
  },
  {
    dataField: "id",
    text: "Member",
    headerStyle: () => ({
      width: "150px",
    }),
  },
  {
    dataField: "status",
    text: "Status",
    headerStyle: () => ({
      width: "120px",
    }),
  },
];
export const Overview: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.viewTitles}>
        <p className={styles.titles}>List Project</p>
        <div className={styles.viewSearch}>
          <form className={styles.btnSearch}>
            <input className={styles.inputSearch}></input>
            <img src={ICSearch} className={styles.icSearch} />
          </form>
        </div>
      </div>
      <Table
        data={products}
        columns={columns}
        rowStyle={{ fontWeight: 200, fontSize: 13, color: "GrayText" }}
      ></Table>
    </div>
  );
};
