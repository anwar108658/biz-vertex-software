import { ArrowUpward, Calculate,  Grid4x4, Man,  Payments} from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation } from "react-router-dom"
import { addVal, removeVal, setIsCloseMenu, setIsOpenMenu } from "../store/Slices/getValSlice"
import MenuUI from "./MenuUI"
import { useState } from "react"

const num = ["1","2","3","4","5","6","7","8","9","0",".","X","←","✓"]

const body = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const store:any = useSelector(store => store)
    const ItemLi1 = store.isMenu == "search" ? ["Customer","Article","Receipt","Gift Card","Discount","Day-end-closing","period-end-closing"]:
    ["cash-in/cash-out","Day-end-closing","Cashing-up","Receipt exports","configuration","Sync backend data"]
    const dataHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.innerText
        if (value === "←") {
            dispatch(removeVal())
        }else if(value !== "✓"){
            dispatch(addVal(value))
        }
    }
  return (
    <div className="relative grid grid-cols-12">
        {store.openMenu && <div onClick={() => dispatch(setIsCloseMenu())} className="fixed w-full h-full  backdrop-blur-2xl">
            <ul className="absolute gap-1 bg-[#292D2D] flex justify-center flex-col items-center px-2 py-1 text-white right-0 top-0">
                <MenuUI data={ItemLi1}/>
            </ul>
        </div>}
        <div className="order-1 md:order-0 col-span-12 md:col-span-10 gap-2 grid grid-cols-10 h-[90.3vh] bg-[#E1E1E9]">

            <div className="col-span-10 grid grid-cols-10 text-[.9rem] gap-[1px] overflow-auto bg-white min-h-[17rem]">
                <div className="col-span-2 grid grid-cols-3 gap-[1px]">
                    <div className="col-span-1 px-1 h-[23px] bg-[#393D3D] text-white">#</div>
                    <div className="col-span-2 px-1 h-[23px] bg-[#393D3D] text-white">Article ID</div>
                </div>
                <div className="col-span-3 px-1 h-[23px] bg-[#393D3D] text-white">Article</div>
                <div className="col-span-1 px-1 h-[23px] bg-[#393D3D] text-white">Quantity</div>
                <div className="col-span-1 px-1 h-[23px] bg-[#393D3D] text-white">Unit</div>
                <div className="col-span-1 px-1 h-[23px] bg-[#393D3D] text-white">Unit Price</div>
                <div className="col-span-1 px-1 h-[23px] bg-[#393D3D] text-white">Discount</div>
                <div className="col-span-1 px-1 h-[23px] bg-[#393D3D] text-white">Price</div>
            </div>

            <div className="col-span-10 grid grid-cols-12 bg-[#FBFCF9]  max-h-20">
                <div className="col-span-2 py-2 text-[.9rem] text-gray-600 shadow-md flex flex-col justify-center items-center " >
                    <p>Discount</p>
                    <p>0.00 AED</p>
                    <p>0.00%</p>
                </div>
                <div className="col-span-2 py-2 text-[.9rem] text-gray-600 shadow-md flex flex-col justify-center items-center " >
                    <p>Loyalty points</p>
                    <p>0.00 AED</p>
                </div>
                <div className="col-span-2 py-2 text-[.9rem] text-gray-600 shadow-md flex flex-col justify-center items-center " >
                    <p>Tax</p>
                    <p>0.00 AED</p>
                </div>
                <div className="col-span-6 p-2 shadow-md grid grid-cols-3 ">
                    <div className="col-span-1 flex flex-col justify-between">
                        <p className="font-bold">Total</p>
                        <p className="font-bold">open Amount</p>
                    </div>
                    <div className="col-span-1">sdsads</div>
                    <div className="col-span-1 flex flex-col text-[.9rem] justify-between">
                        <p className="font-bold">0.00AED</p>
                        <p className="font-bold text-red-500">0.0AED</p>
                    </div>
                </div>
            </div>

            <ul className="col-span-10 flex text-[.8rem] md:text-[.9rem] justify-evenly text-gray-700 cursor-pointer items-center max-h-10 border-b-2 border-gray-400">
                <Link to="/" className={`col-span-2 ${location.pathname === "/" ? "text-blue-500 font-bold" : ""}`}>HOME</Link>
                <Link to="/salesitems" className={`col-span-2 ${location.pathname === "/salesitems" ? "text-blue-500 font-bold" : ""}`}>SALES ITEM</Link>
                <Link to="/customer" className={`col-span-2 ${location.pathname === "/customer" ? "text-blue-500 font-bold" : ""}`}>CUSTOMERS</Link>
                <Link to="/omini-channel" className={`col-span-2 ${location.pathname === "/omini-channel" ? "text-blue-500 font-bold" : ""}`}>OMNI-CHANELS</Link>
                <Link to="/reciept" className={`col-span-2 ${location.pathname === "/reciept" ? "text-blue-500 font-bold" : ""}`}>RECIEPTS</Link>
            </ul>
            <div className="col-span-10 min-h-36">
                <Outlet/>
            </div>
        </div>

        <div className="col-span-12 md:col-span-2 bg-[#E1E1E9] p-[1px] h-[90.3vh] flex flex-col justify-between">
            <div className="flex justify-between py-2 px-1">
                <div className="text-[.9rem]">
                    <p>Recipt-ID</p>
                    <p>Price-List</p>
                </div>
                <h1 className="text-2xl text-red-600">Test Mode</h1>
            </div>
            <div className="grid grid-cols-3">
                <button className="col-span-3 shadow-sm text-[#1D6B9D] bg-[#F2FCFF] text-[.8rem] py-2 px-1">
                    <div className="flex justify-items-start"><Man sx={{fontSize:".8rem"}}/><p>Select customers</p></div>
                    <div><p>Click to Serch For a Cutomer</p><p>or Scan cutome Id</p></div>
                </button>
            </div>
            <div className="grid grid-cols-3 gap-1">
                {
                    num.map((n,i) => {
                        return (
                            <button key={i} onClick={(e) => dataHandler(e)} className={`${n==="✓"?"col-span-2 bg-green-400 text-white":"col-span-1"} shadow-md ${n==="←"?"bg-red-500 text-white":""} bg-[#F2FCFF] text-[.8rem] py-2 px-1`}>{n}</button>
                        )
                    })
                }
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-1">
                <button className="col-span-1 bg-[#009DDF] text-white py-3"><Calculate/></button>
                <button className="col-span-1 bg-[#009DDF] text-white py-3"><Grid4x4/></button>
                <button className="col-span-2 bg-[#009DDF] flex justify-between text-white">
                    <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-3">
                    <Payments/>
                    </div>
                    <div className="h-full flex items-center">
                    <h2 className="text-2xl">Exact_Amount</h2>
                    </div>
                </button>
                <button className="col-span-2 bg-[#009DDF] flex justify-between text-white">
                    <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-3">
                    <ArrowUpward/>
                    </div>
                    <div className="h-full flex items-center">
                    <h2 className="text-[1.2rem]">Quick Selection</h2>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default body