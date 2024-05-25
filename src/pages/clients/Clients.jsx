import "./clients.scss";
import Siedebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Clientstable from "../../components/clienttable/Clientstable";

const Clients = () => {
  return (
    <div className="clients">
      <Siedebar />
      <div className="listContainer">
        <Navbar />
        <Clientstable />
      </div>
    </div>
  );
};

export default Clients;
