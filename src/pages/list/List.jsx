import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = ({columns, rows, title}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <Datatable columns={columns} rows={rows} title={title}/>
      </div>
    </div>
  );
};

export default List;
