import UserImg from "./images/user.jpg";
import User1Img from "./images/user1.jpg";
import User2Img from "./images/user2.jpg";
import User3Img from "./images/user3.jpg";
import User4Img from "./images/user4.jpg";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Imię i nazwisko",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Adres",
    width: 250,
  },
  {
    field: "phone",
    headerName: "Telefon",
    width: 170,
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "date",
    headerName: "Data zatrudnienia",
    width: 140,
  },
  {
    field: "position",
    headerName: "Stanowisko",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Anna Nowak",
    img: User1Img,
    status: "aktywny",
    email: "anna.nowak@carcenter.pl",
    date: "01-07-2022",
    address: "ul. Prosta 21, 00-230 Warszawa",
    phone: "+48 604 467 789",
    position: "Handlowiec",
  },
  {
    id: 2,
    username: "Jan Kowalski",
    img: UserImg,
    status: "aktywny",
    email: "jan.kowalski@carcenter.pl",
    date: "15-12-2002",
    address: "ul. 1 Maja 2/1, 00-450 Warszawa",
    phone: "+48 504 637 229",
    position: "Kierownik",
  },
  {
    id: 3,
    username: "Adam Polak",
    img: User2Img,
    status: "aktywny",
    email: "adam.polak@carcenter.pl",
    date: "15-12-2002",
    address: "ul. 1 Maja 2/1, 00-450 Warszawa",
    phone: "+48 504 637 229",
    position: "Mechanik",
  },
  {
    id: 4,
    username: "Ewa Sikora",
    img: User4Img,
    status: "aktywny",
    email: "ewa.sikora@carcenter.pl",
    date: "01-03-2017",
    address: "ul. Krucza 23/2, 02-520 Warszawa",
    phone: "+48 693 608 445",
    position: "Księgowa",
  },
  {
    id: 5,
    username: "Jacek Traczyk",
    img: User3Img,
    status: "urlop",
    email: "jacek.traczyk@carcenter.pl",
    date: "01-03-2017",
    address: "ul. Nowa 32, 12-530 Otwock",
    phone: "+48 608 367 446",
    position: "Handlowiec",
  },
];
