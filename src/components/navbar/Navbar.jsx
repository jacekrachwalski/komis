import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlineIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import profileImg from "../../images/user.jpg";
import Tooltip from "@mui/material/Tooltip";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Szukaj..."></input>
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <Tooltip title="Zmień język" arrow>
              <LanguageOutlineIcon className="icon" />
            </Tooltip>
          </div>
          <div className="item">
            <Tooltip title="Tryb ciemny" arrow>
              <DarkModeOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="item">
            <Tooltip title="Pełny ekran" arrow>
              <FullscreenExitOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="item">
            <Tooltip title="Powiadomienia" arrow>
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">1</div>
            </Tooltip>
          </div>
          <div className="item">
            <Tooltip title="Wiadomości" arrow>
              <ChatBubbleOutlineOutlined className="icon" />
              <div className="counter">2</div>
            </Tooltip>
          </div>
          <div className="item">
            <Tooltip title="Opcje" arrow>
              <ListOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="item">
            <Tooltip title="Profil" arrow>
              <img src={profileImg} alt="Profile" className="avatar"></img>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
