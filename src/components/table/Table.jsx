import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "BMW 318",
      img: "https://webapi.mojsiuk.csflow.pl/car-photo/9951/QrmYA9qXLQ2Ih2jy.jpg",
      customer: "Jan Kowalski",
      date: "30-04-2024",
      amount: 89000,
      method: "Gotówka",
      status: "Wydany",
    },
    {
      id: 2235235,
      product: "Mercedes-Benz E220",
      img: "https://webapi.mojsiuk.csflow.pl/car-photo/7678/T03GTdkqD3QyCBc7.jpg",
      customer: "Krzysztof Kwiatkowski",
      date: "28-04-2024",
      amount: 74000,
      method: "Przelew",
      status: "Zaliczka",
    },
    {
      id: 2342353,
      product: "Jeep Grand Cherokee",
      img: "https://webapi.mojsiuk.csflow.pl/car-photo/10744/dH4fpyXJTPvx9ZMG.jpg",
      customer: "Roman Szewczyk",
      date: "22-04-2024",
      amount: 182300,
      method: "Gotówka",
      status: "Zaliczka",
    },
    {
      id: 2357741,
      product: "Honda CR-V",
      img: "https://webapi.mojsiuk.csflow.pl/car-photo/6424/mt0jDOH02p5JG5yh.jpg",
      customer: "Anna Nowak",
      date: "15-04-2024",
      amount: 155900,
      method: "Leasing",
      status: "Wydany",
    },
    {
      id: 2342355,
      product: "Peugeot 2008",
      img: "https://webapi.mojsiuk.csflow.pl/car-photo/10814/gMdxWOz4FThwK70X.jpg",
      customer: "Karol Szymczak",
      date: "14-04-2024",
      amount: 89900,
      method: "Przelew",
      status: "Zaliczka",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID Transakcji</TableCell>
            <TableCell className="tableCell">Samochód</TableCell>
            <TableCell className="tableCell">Klient</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Płatność</TableCell>
            <TableCell className="tableCell">Metoda płatności</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
