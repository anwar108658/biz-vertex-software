import { useState } from "react";
import { useSelector } from "react-redux"
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import { Calculate, Grid4x4, Payments } from "@mui/icons-material";

const Payment = () => {
    const store:any = useSelector(state => state)
    const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className={`${!store.isPaymentOpen?"hidden":""} absolute grid grid-cols-12 w-full h-[90.3vh] p-2 bg-[#E5E5ED]`}>
        <div className="h-full shadow-md col-span-4 bg-white">
            <p className="p-1 bg-[#393D3D] text-white text-[.9rem]">PAYMENTS</p>
            <div className="p-2 text-[.9rem]">
                <div className="grid grid-cols-5"><p className="col-span-3">1.00 article-TST100001103</p><p><b>0.00</b></p><p className="text-right">0.00AED</p></div>
                <div className="grid grid-cols-5"><p className="col-span-3">Discount</p><p><b>0.00%</b></p><p className="text-right">0.00AED</p></div>   
            </div>
            <div className="bg-[#EAF0F2] flex justify-between px-2 py-1 text-[1.3rem]">
                <p className="text-gray-800">Total</p>
                <h3 className="font-semibold">0.00AED</h3>
            </div>
            <div className="h-[42vh] p-2 my-1 overflow-auto">
                
            </div>
            <div className="flex justify-between px-2 py-1 text-[.9rem] bg-white border-gray-300 border-t-1">
                <p>Open Amount</p>
                <p className="text-green-900">0.00AED</p>
            </div>
            <div className="grid grid-cols-4 gap-2 p-3  bg-[#E5E5ED]">
                <div className="col-span-2 gap-x-3 grid grid-cols-2">
                    <img className="col-span-1 w-[100px]" src={c1} alt="" />
                    <img className="col-span-1 w-[100px]" src={c2} alt="" />
                    <img className="col-span-1 w-[100px]" src={c3} alt="" />
                    <img className="col-span-1 w-[100px]" src={c4} alt="" />
                </div>
                <div className="col-span-2 grid gap-1 grid-cols-2">
                    <button  className="col-span-1 bg-[#009DDF] text-white py-3"><Calculate/></button>
                    <button className="col-span-1 bg-[#009DDF] text-white py-3"><Grid4x4/></button>
                    <button className="col-span-2 bg-[#009DDF] flex justify-between text-white">
                        <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-3">
                        <Payments/>
                        </div>
                        <div className="h-full flex items-center">
                        <h2 className="text-2xl">Exact_Amount</h2>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className="col-span-8 bg-black grid grid-cols-8 place-items-center">
            <div className="bg-gray-600 col-span-6 grid grid-cols-8">
                <p className="col-span-6 bg-white">name</p>
            </div>
        </div>
    </div>
  )
}

export default Payment