import BootstrapTable from "react-bootstrap-table-next";
import Pagination from "react-js-pagination";
import styles from "./tables.module.scss";
interface Props {
  data: any;
  columns: any;
  rowStyle: React.CSSProperties;
}
export const Table: React.FC<Props> = (props: Props) => {
  const { data, columns, rowStyle } = props;
  return (
    <div className={styles.container}>
      <div className={styles.custom_table}>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={data}
          striped
          hover
          condensed
          columns={columns}
          rowStyle={rowStyle}
        />
      </div>
      {/* <div className={styles.newView}>
        <div className={styles.customPagination}>
          <Pagination
            activePage={1}
            itemsCountPerPage={10}
            totalItemsCount={5}
            pageRangeDisplayed={5}
            onChange={() => {}}
          />
        </div>
      </div> */}
    </div>
  );
};
