import "./sell.scss";
import Siedebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Selltable from "../../components/selltable/Selltable";

const Sell = () => {
  return (
    <div className="sell">
      <Siedebar />
      <div className="listContainer">
        <Navbar />
        <Selltable />
      </div>
    </div>
  );
};

export default Sell;
