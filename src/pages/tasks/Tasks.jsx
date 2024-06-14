import "./tasks.scss";
import Siedebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Kanban from "../../components/kanban/Kanban";

const Tasks = () => {
  return (
    <div className="tasks">
      <Siedebar />
      <div className="listContainer">
        <Navbar />
        <Kanban />
      </div>
    </div>
  );
};

export default Tasks;
