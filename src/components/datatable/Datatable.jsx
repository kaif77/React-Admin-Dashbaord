import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Datatable = ({columns, rows, title}) => {
  const [data, setData] = useState(rows);

  const location = useLocation();
  console.log(location.pathname);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: "200",
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to={`${location.pathname}/test`} style={{ textDecoration: "none" }}>
              <div className="view-btn">View</div>
            </Link>
            <div
              className="delete-btn"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatable-title">
        {title}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
