
import {Menu,Bell} from '../../assets/Nav';
import Algo from "../../assets/Algo.svg";


const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-between lg:justify-end mt-10 mx-5 md:mx-10 md:mr-16 py-4  '>
      <div className="flex lg:hidden gap-x-2 md:gap-x-5 p-2 md:p-5 items-center group">
        <Menu />
        <img
          src={Algo}
          alt="AlgoZenith"
          className=" size-10 opacity-0  transform  group-hover:opacity-100 transition-all duration-500 ease-out"
        />
        <p className="text-[#172B4D] text-xl lg:text-2xl font-extrabold transform -translate-x-10 group-hover:translate-x-0  transition-all duration-500 ease-out ">AlgoZenith</p>

      </div>
        <div className='flex items-center gap-x-3 md:gap-x-5 '>
        <Bell/>
        <div className='size-16 rounded-full bg-[#D9D9D9]'></div>
        </div>
    </div>
  )
}

export default Navbar;