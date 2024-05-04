import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Przychód</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Dzisiejszy przychód ze sprzedaży</p>
        <p className="amount">280.000 zł</p>
        <p className="desc">
          *Zestawienie obejmuje zakończone transakcje. Płatności niezaksięgowane
          mogą być nieujęte w zestawieniu.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">120.000 zł</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Ostatni tydzień</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">58.000 zł</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Ostatni miesiąc</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">35.600 zł</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
