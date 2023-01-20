import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./table.scss";

const List = () => {
  const rows = [
    {
      id: 11525,
      product: "Acer Nitro 4",
      img:"https://www.lapzone.lk/wp-content/uploads/2020/11/71s1LRpaprL._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "2015-01-25",
      amount: 560,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 24526,
      product: "Dell Inspire",
      img:"https://m.media-amazon.com/images/I/71nP6lTogjL._AC_SL1500_.jpg",
      customer: "Bob Parnell",
      date: "2015-02-05",
      amount: 230,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 41522,
      product: "XBOX",
      img: "https://m.media-amazon.com/images/I/61JGKhqxHxL._SL1500_.jpg",
      customer: "Mitchel Doe",
      date: "2015-04-30",
      amount: 499,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 471523,
      product: "Razer Mobile",
      img:"https://variety.com/wp-content/uploads/2018/10/razer-phone-2.png",
      customer: "Jane Doe",
      date: "2015-01-25",
      amount: 870,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 24185,
      product: "ASUZ ROG",
      img:"https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "2015-04-25",
      amount: 1500,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 241563,
      product: "Acer Nitro 4",
      img:"https://www.lapzone.lk/wp-content/uploads/2020/11/71s1LRpaprL._AC_SL1500_.jpg",
      customer: "Kennedy Smart",
      date: "2015-05-25",
      amount: 560,
      method: "Cash on Delivery",
      status: "Pending",
    },
  ];

  return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                    <div className="cell-wrapper">
                        <img src={row.img} alt="" className="image" />
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default List;
