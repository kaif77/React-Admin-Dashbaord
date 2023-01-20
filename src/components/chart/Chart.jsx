import {
  AreaChart,
  Area,
  XAxis,
  // YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.scss";

const Chart = () => {
    const data = [
        {
          name: "January",
          amt: 1200,
        },
        {
          name: "February",
          amt: 2100,
        },
        {
          name: "March",
          amt: 800,
        },
        {
          name: "April",
          amt: 1700,
        },
        {
          name: "June",
          amt: 1000,
        },
        {
          name: "July",
          amt: 1500,
        },
        {
          name: "August",
          amt: 2100,
        },
      ];
      
  return (
    <div className="chart">
      <div className="charts-titles">
            Previous Revenues (Monthly)
        </div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#59e2f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#59e2f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="2 2" className="chart-grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amt"
            stroke="#59e2f6"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
