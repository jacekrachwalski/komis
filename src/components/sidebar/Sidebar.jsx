import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">CarCenter</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">HOME</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Panel użytkownika</span>
            </li>
          </Link>
          <p className="title">KARTOTEKI</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsOutlinedIcon className="icon" />
              <span>Pracownicy</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Magazyn</span>
            </li>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Sprzedaż</span>
            </li>
          </Link>

          <Link to="/clients" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltOutlinedIcon className="icon" />
              <span>Klienci</span>
            </li>
          </Link>

          <p className="title">DODATKI</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Raporty</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Powiadomienia</span>
          </li>
          <p className="title">SERWIS</p>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>Diagnostyka</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Zlecenia</span>
          </li>
          <li>
            <BuildOutlinedIcon className="icon" />
            <span>Naprawy</span>
          </li>
          <p className="title">UŻYTKOWNIK</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profil</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Ustawienia</span>
          </li>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Wyloguj</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
