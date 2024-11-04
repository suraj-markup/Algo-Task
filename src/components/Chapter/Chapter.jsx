
import { Clock } from "../../assets/Main";

const tempData = [
  {
    id: 1,
    title: "Chapter 1",
    isActive: true,
  },
  {
    id: 2,
    title: "Chapter 2",
    isActive: false,
  },
  {
    id: 3,
    title: "Chapter 3",
    isActive: false,
  },
  {
    id: 4,
    title: "Chapter 4",
    isActive: false,
  },
  {
    id: 5,
    title: "Chapter 5",
    isActive: false,
  },
];

const Chapter = () => {
  return (
    <div className="md:w-[30%] my-5 hidden md:block">
      {tempData.map((item) => (
        <div key={item.id}>
          <div
            className={`flex flex-wrap gap-y-2 flex-col xl:flex-row lg:justify-between   pl-2 pr-5 xl:pl-5 py-5  ${
              item.isActive ? "bg-[#EFF5FF] rounded-lg" : ""
            }`}
          >
            <p
              className={`${
                item.isActive && " font-bold" 
              } lg:text-lg  xl:text-xl`}
            >
              {item.title}
            </p>
            {item.isActive && (
              <p className=" text-[#608AD2] flex items-center gap-1 xl:gap-2 text-base lg:text-lg ">
                <Clock /> <p>05:00:00</p>
              </p>
            )}
          </div>
          {item.isActive ? null : (
            <div className="h-[1px] bg-gradient-to-r from-white to-white via-[#8FDFFF]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chapter;
