export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell-with-image">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cell-with-status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  }
];

//temp users
export const userRows = [
  {
    id: 1,
    username: "snow",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    lastName: "Snow",
    firstName: "Jon",
    email: "snow@gmail.com",
    status: "active",
    age: 35,
  },
  {
    id: 2,
    username: "jamie",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    lastName: "Lannister",
    firstName: "Cersei",
    email: "jamie@gmail.com",
    status: "active",
    age: 42,
  },
  {
    id: 3,
    username: "lancer",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    lastName: "Lannister",
    firstName: "Jaime",
    email: "lance@gmail.com",
    status: "active",
    age: 45,
  },
  {
    id: 4,
    username: "stark",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80",
    lastName: "Stark",
    firstName: "Arya",
    email: "arya@gmail.com",
    status: "pending",
    age: 16,
  },
  {
    id: 5,
    username: "dene",
    img: "https://images.unsplash.com/photo-1627087820883-7a102b79179a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGFpdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "dane@gmail.com",
    status: "active",
    age: 25,
  },
  {
    id: 6,
    username: "meli",
    img: "https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80",
    lastName: "Melisandre",
    firstName: null,
    email: "meli@gmail.com",
    status: "active",
    age: 150,
  },
  {
    id: 7,
    username: "ferra",
    img: "https://st4.depositphotos.com/3433891/21380/i/600/depositphotos_213800986-stock-photo-young-handsome-entrepreneur-man-face.jpg",
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "ferra@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "ross",
    img: "https://i.pinimg.com/originals/e1/a8/06/e1a80667a1f19ac23833f3faf4367d7e.jpg",
    lastName: "Frances",
    firstName: "Rossini",
    email: "frances@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "roxie",
    img: "https://i.pinimg.com/originals/8f/38/4a/8f384a6dc476615499ebf55189437704.jpg",
    lastName: "Roxie",
    firstName: "Harvey",
    email: "rox@gmail.com",
    status: "active",
    age: 65,
  },
  {
    id: 10,
    username: "jamie",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    lastName: "Lannister",
    firstName: "Cersei",
    email: "jamie@gmail.com",
    status: "active",
    age: 42,
  },
  {
    id: 11,
    username: "lancer",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    lastName: "Lannister",
    firstName: "Jaime",
    email: "lance@gmail.com",
    status: "active",
    age: 45,
  },
  {
    id: 12,
    username: "meli",
    img: "https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80",
    lastName: "Melisandre",
    firstName: null,
    email: "meli@gmail.com",
    status: "active",
    age: 150,
  },
  {
    id: 13,
    username: "ferra",
    img: "https://st4.depositphotos.com/3433891/21380/i/600/depositphotos_213800986-stock-photo-young-handsome-entrepreneur-man-face.jpg",
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "ferra@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 14,
    username: "ross",
    img: "https://i.pinimg.com/originals/e1/a8/06/e1a80667a1f19ac23833f3faf4367d7e.jpg",
    lastName: "Frances",
    firstName: "Rossini",
    email: "frances@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 15,
    username: "meli",
    img: "https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80",
    lastName: "Melisandre",
    firstName: null,
    email: "meli@gmail.com",
    status: "active",
    age: 150,
  },
  {
    id: 16,
    username: "ferra",
    img: "https://st4.depositphotos.com/3433891/21380/i/600/depositphotos_213800986-stock-photo-young-handsome-entrepreneur-man-face.jpg",
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "ferra@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 17,
    username: "ross",
    img: "https://i.pinimg.com/originals/e1/a8/06/e1a80667a1f19ac23833f3faf4367d7e.jpg",
    lastName: "Frances",
    firstName: "Rossini",
    email: "frances@gmail.com",
    status: "active",
    age: 36,
  },
];



export const productColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "product",
    headerName: "Product",
    width: 270,
    renderCell: (params) => {
      return (
        <div className="cell-with-image">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.product}
        </div>
      );
    },
  },
  { field: "amount", headerName: "Amount", width: 150 },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cell-with-status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  }
];


export const productRows = [
  {
    id: 11525,
    product: "Acer Nitro 4",
    img:"https://www.lapzone.lk/wp-content/uploads/2020/11/71s1LRpaprL._AC_SL1500_.jpg",
    amount: "$560",
    status: "In Stock",
  },
  {
    id: 24526,
    product: "Dell Inspire",
    img:"https://m.media-amazon.com/images/I/71nP6lTogjL._AC_SL1500_.jpg",
    amount: "$230",
    status: "In Stock",
  },
  {
    id: 41522,
    product: "XBOX",
    img: "https://m.media-amazon.com/images/I/61JGKhqxHxL._SL1500_.jpg",
    amount: "$499",
    status: "Out of Stock",
  },
  {
    id: 471523,
    product: "Razer Mobile",
    img:"https://variety.com/wp-content/uploads/2018/10/razer-phone-2.png",
    amount: "$870",
    status: "In Stock",
  },
  {
    id: 24185,
    product: "ASUZ ROG",
    img:"https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SL1500_.jpg",
    amount: "$1500",
    status: "Out of Stock",
  },
  {
    id: 241563,
    product: "Acer Nitro 4",
    img:"https://www.lapzone.lk/wp-content/uploads/2020/11/71s1LRpaprL._AC_SL1500_.jpg",
    amount: "$560",
    status: "In Stock",
  },
]