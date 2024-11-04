
import {
  Clock,
  Chart,
  Copy,
  Up,
  Down,
  Question,
  Video,
  Coding,
} from "../../assets/Main";


//Temporary Data
const tempData = [
  {
    id: 1,
    title: "Part 1",
    name: "Lorem Ipsum Dolor Sit Amet",
    time: "02:00:00",
    level: "Medium",
    Module: 5,
    completed: 45,
    isActive: true,
  },
  {
    id: 2,
    title: "Part 2",
    name: "Lorem Ipsum Dolor Sit Amet",
    time: "02:00:00",
    level: "Medium",
    Module: 12,
    completed: 20,
    isActive: false,
  },
  {
    id: 3,
    title: "Part 3",
    name: "Lorem Ipsum Dolor Sit Amet",
    time: "02:00:00",
    level: "Medium",
    Module: 12,
    completed: 0,
    isActive: false,
  },
];

const Part = () => {
  return (
    <div className="w-full md:w-[75%] lg:mx-5  lg:ml-5">
      {tempData.map((data) => (
        <div
          key={data.id}
          className={` border-x-[1px] ${
            data.isActive && "border-b-[1px] border-[#A4E6FF] shadow-custom-shadow"
          } rounded-[16px]  `}
        >
          <div
            className="rounded-[16px] pb-[8px] my-5" // Adjust padding to set the border width
            style={{
              background: `linear-gradient(90deg, #172B4DD9 ${data.completed}%, #EFF5FF ${data.completed}%)`,
            }}
          >
            <div
              className={`flex flex-col xl:flex-row lg:justify-between bg-white border-x-[1px] border-t-[1px] border-[#A4E6FF] rounded-[16px] ${
                data.isActive && "shadow-custom-shadow"
              }  p-3 sm:p-5 pb-1  `}
            >
              <div>
                <p className="text-lg lg:text-2xl text-[#17384D]">
                  {data.title}
                </p>
                <h2 className="text-xl lg:text-[28px] font-bold">
                  {data.name}
                </h2>
              </div>
              <div className="flex flex-col justify-end items-end mt-5">
                <div className="flex gap-0 sm:gap-1 lg:gap-2 items-center">
                  <Clock /> <p>{data.time}</p> <Chart />
                  <p>{data.level}</p> <Copy />
                  <p>{data.Module}</p> {data.isActive ? <Up /> : <Down />}
                </div>
                <div className="border-solid border-2 rounded-lg w-1/2 text-center bg-[#EFF5FF] border-[#99E4FF] text-lg m-2 mt-5">
                  {data.completed}% Complete
                </div>
              </div>
            </div>
          </div>

          {data.isActive && (
            <div>
              <div className="flex justify-between m-5 p-5 ">
                <div className="flex gap-2 items-center">
                  <Video />
                  <p className="text-xl lg:text-2xl font-bold">Video 1</p>
                </div>

                <div className="flex gap-2 items-center">
                  <Clock />
                  <p className="text-2xl">10:00</p>
                </div>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-white to-white via-[#172B4D]"></div>

              <div className="flex justify-between m-5 p-5 ">
                <div className="flex gap-2 items-center">
                  <Question />
                  <p className="text-xl lg:text-2xl font-bold">Article 1</p>
                </div>

                <div className="flex gap-2 items-center">
                  <Clock />
                  <p className="text-2xl">10:00</p>
                </div>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-white to-white via-[#172B4D]"></div>

              <div className="flex justify-between m-5 p-5 ">
                <div className="flex gap-2 items-center">
                  <Question />
                  <p className="text-xl lg:text-2xl font-bold">Quiz 1</p>
                </div>

                <div className="flex gap-2 items-center">
                  <Clock />
                  <p className="text-2xl">10:00</p>
                </div>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-white to-white via-[#172B4D]"></div>

              <div className="flex justify-between m-5 p-5 ">
                <div className="flex gap-2 items-center">
                  <Coding />
                  <p className="text-xl lg:text-2xl font-bold">
                    Coding Exercise 1
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <Clock />
                  <p className="text-2xl">10:00</p>
                </div>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-white to-white via-[#172B4D]"></div>

              <div className="flex justify-between m-5 p-5 ">
                <div className="flex gap-2 items-center">
                  <Copy />
                  <p className="text-xl lg:text-2xl font-bold">
                    Combined Resource 1
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <Clock />
                  <p className="text-2xl">10:00</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Part;
