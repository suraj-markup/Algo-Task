import { Mentor, Material, Info } from "../../assets/Dash";
import Chapter from "../Chapter/Chapter";
import Part from "../Part/Part";

const Dashboard = () => {
  return (
    <div className="border-solid border-[1px] border-[#A4E6FF] rounded-[16px] mx-5 md:mx-10 md:mr-14 mt-5 bg-white h-auto">

      <div className="flex flex-wrap items-center justify-center  md:justify-between m-2 md:m-5 border-b-[1px] border-[#A4E6FF] border-solid">
        <div className="flex  gap-5 m-2 p-3 lg:p-4 bg-custom-gradient blue-300 rounded-xl " >

          <div className="flex items-center justify-center gap-2 p-1 lg:p-3  lg:ml-3">
            <Mentor />
            <p className="text-base lg:text-[22px]">Mentor Sessions</p>
          </div>
          <div
            className="  pl-[.5px] pr-[.6px] py-[.9px] pb-[.5px] rounded-lg" 
            style={{
              background:
                "linear-gradient(104.1deg, #05445E -162.17%, #D2E3FF 100%)",boxShadow: '0px 3.67px 3.67px 0px #29539B4D'
            }}
          >
            <div className="flex items-center justify-center p-1 lg:p-3 gap-2 bg-white rounded-lg">
              <Material />
              <p className="font-bold text-base lg:text-[22px]">Learning Material</p>
            </div>
          </div>
        </div>

        <div className="flex  items-center">
            <div className="flex items-center gap-2 border-[#99E4FF] border-solid border-[1px] rounded-xl p-2 md:p-3 mb-2 lg:mb-0">

          <Info /> <p className="font-bold text-base lg:text-[22px] text-[#172B4D]">How it works</p>
            </div>
        </div>
      </div>

    <div className=" flex mx-2 sm:mx-7 ">
      
        <Chapter  />
        <Part />
    </div>

    </div>
  );
};

export default Dashboard;
