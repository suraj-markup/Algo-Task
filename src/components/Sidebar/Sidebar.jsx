import { Menu } from "../../assets/Nav";
import {
  Dashboard,
  Learn,
  Forum,
  Upskill,
  Contest,
  Leaderboard,
} from "../../assets/Side";
import Algo from "../../assets/Algo.svg";
const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between  my-10 md:ml-5 lg:ml-12 xl:ml-20 space-y-4 ">
      <div className="flex items-center gap-x-4 lg:gap-x-6 p-5 group">
        <Menu />
        <img
          src={Algo}
          alt="AlgoZenith"
          className=" size-10 opacity-0  transform  group-hover:opacity-100 transition-all duration-500 ease-out"
        />
        <p className="text-[#172B4D] md:text-xl lg:text-2xl font-extrabold transform -translate-x-16 group-hover:translate-x-0  transition-all duration-500 ease-out">
          AlgoZenith
        </p>
      </div>
      <div className="flex gap-x-4 lg:gap-x-6 items-center  p-5">
        <Dashboard />
        <p className="md:text-lg lg:text-2xl">Dashboard</p>
      </div>
      <div className="flex  gap-x-4 lg:gap-x-6 items-center  p-5">
        <Learn /> <p className="md:text-lg lg:text-2xl">Learn</p>
      </div>
      <div className="flex  gap-x-4 lg:gap-x-6 items-center  p-5">
        <Forum /> <p className="md:text-lg lg:text-2xl">Forum</p>
      </div>
      <div className="flex  gap-x-4 lg:gap-x-6 items-center bg-[#D6F4FF] px-5 py-4 rounded-lg">
        <Upskill />{" "}
        <p className="md:text-lg lg:text-2xl font-bold text-[#172B4D]">
          Upskill
        </p>
      </div>
      <div className="flex  gap-x-4 lg:gap-x-6 items-center  p-5">
        <Contest /> <p className="md:text-lg lg:text-2xl">Contest</p>
      </div>
      <div className="flex  gap-x-4 lg:gap-x-6 items-center  p-5">
        <Leaderboard /> <p className="md:text-lg lg:text-2xl">Leaderboard</p>
      </div>
    </div>
  );
};

export default Sidebar;
