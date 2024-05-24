import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
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
          <li>
            <DashboardIcon className="icon" />
            <span>Panel użytkownika</span>
          </li>
          <p className="title">KARTOTEKI</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Klienci</span>
            </li>
          </Link>
          <li>
            <StoreIcon className="icon" />
            <span>Magazyn</span>
          </li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Sprzedaż</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Części</span>
          </li>
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
          <li>
            <ExitToAppIcon className="icon" />
            <span>Wyloguj</span>
          </li>
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
