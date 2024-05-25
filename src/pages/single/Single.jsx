import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import ProfilImage from "../../images/user1.jpg";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edycja</div>
            <h1 className="title">Informacje</h1>
            <div className="item">
              <img src={ProfilImage} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Anna Nowak</h1>
                <div className="detailItem">
                  <span className="itemKey">Stanowisko:</span>
                  <span className="itemValue">Handlowiec</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">nowak.nowak@carcenter.pl</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefon:</span>
                  <span className="itemValue">+48 604 467 789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adres:</span>
                  <span className="itemValue">
                    ul. Prosta 21, 00-230 Warszawa
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Bilans transakcji ( ostatnie 6 miesięcy)"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Lista Transakcji</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
