import { Alarm, Keyboard, Man, Person,PowerSettingsNew, Search, TtySharp } from "@mui/icons-material";
import logo from "./../assets/Logo - Dark Theme.png";
import { useDispatch, useSelector } from "react-redux";
import { keyBoardVal } from "../store/Slices/getValSlice";

interface StoreState {
  data: string;
}

const Navbar = () => {
    const dispatch = useDispatch();
    const store = useSelector((store: StoreState) => store)
    console.log(store)
  return (
    <div className='grid grid-cols-6 lg:grid-cols-12 gap-2 p-[1px] py-[3px] px-2 bg-[#292D2D] text-white'>
        <div className="col-span-1"><img className="w-[70px]" src={logo} alt="logo" /></div>
        <div className="col-span-2 text-gray-200">
            <div className="flex items-center gap-1 text-[.7rem]">
                <Alarm sx={{fontSize:"1rem"}}/>
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
            <div className="flex items-center gap-1 text-[.7rem]">
                <TtySharp sx={{fontSize:"1rem"}}/>
                <p>TST</p>
            </div>
            <div className="flex items-center gap-1 text-[.7rem]">
                <Man sx={{fontSize:"1rem"}}/>
                <p>TST(TST)</p>
            </div>
        </div>
        <div className="col-span-5 order-1 sm:order-0 grid grid-cols-12 gap-1 py-1">
            <div className="col-span-1 flex justify-center bg-[#404648] items-center "><Keyboard /></div>
            <div className="col-span-11 bg-[#404648]"><input value={store.data} className="w-full h-full focus:outline-none p-2" type="text" /></div>
        </div>
        <div className="col-span-1 order-1 sm:order-0 flex justify-end gap-2 items-center py-1">
            <button className="bg-[#009DDF] h-full px-3 flex items-center rounded-sm"><Search/></button>
            <button onClick={() => dispatch(keyBoardVal())} className="bg-[#009DDF] h-full px-3 flex items-center rounded-sm"><Keyboard/></button>
        </div>
        <ul className="col-span-2 flex gap-2 items-center">
            <li className="flex-1 flex items-center justify-center cursor-pointer border-b-2 border-b-[#292D2D] hover:border-b-2 hover:border-b-[#009DDF] hover:bg-[#3E4242] h-full ">SALES</li>
            <li className="flex-1 flex items-center justify-center cursor-pointer border-b-2 border-b-[#292D2D] hover:border-b-2 hover:border-b-[#009DDF] hover:bg-[#3E4242] h-full">Function</li>
        </ul>
        <div className="col-span-1 flex justify-between gap-2 items-center">
            <button>
             <Search/>
            </button>
            <button>
             <Person/>
            </button>
            <button>
             <PowerSettingsNew/>
            </button>
        </div>
    </div>
  )
}

export default Navbar