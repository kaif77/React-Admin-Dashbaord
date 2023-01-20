import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text="70%" strokeWidth={6} />
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transaction processing. Last Payment may not be include.
        </p>

        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="result-amount">$5.1k</div>
            </div>
          </div>

          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="result-amount">$3.7k</div>
            </div>
          </div>

          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="result-amount">$5.7k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
