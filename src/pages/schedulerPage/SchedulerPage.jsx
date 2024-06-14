import "./schedulerpage.scss";
import Siedebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Scheduler from "../../components/scheduler/Scheduler";

const SchedulerPage = () => {
  return (
    <div className="schedulerpage">
      <Siedebar />
      <div className="listContainer">
        <Navbar />
        <Scheduler />
      </div>
    </div>
  );
};

export default SchedulerPage;
