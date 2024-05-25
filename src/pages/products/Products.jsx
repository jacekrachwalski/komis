import "./products.scss";
import Siedebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Productstable from "../../components/productstable/Productstable";

const Products = () => {
  return (
    <div className="products">
      <Siedebar />
      <div className="listContainer">
        <Navbar />
        <Productstable />
      </div>
    </div>
  );
};

export default Products;
