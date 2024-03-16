import { data } from "./tableData";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Table = () => {
  return <DataTable columns={columns} data={data} />;
};

export default Table;
