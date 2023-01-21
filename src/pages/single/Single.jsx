import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Tables from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />

        <div className="top">
          <div className="left">
            <div className="edit">
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img className="item-img" src="https://i.pinimg.com/originals/e1/a8/06/e1a80667a1f19ac23833f3faf4367d7e.jpg" alt="" />
              <div className="details">
                <h1 className="item-title">Jane Done</h1>
                <div className="detail-item">
                  <span className="item-key">Email :</span>
                  <span className="item-value">jan@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Phone :</span>
                  <span className="item-value">014254</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Address :</span>
                  <span className="item-value">Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Country :</span>
                  <span className="item-value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Previous Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
