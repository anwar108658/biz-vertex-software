import { Add, Close, DoubleArrow, Edit, Search, SearchOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { keyBoardValChange, searchCustomer } from "../store/Slices/getValSlice"


interface StoreState {
  data: string;
  searchCustomer:boolean
}

const CustomerSearch = () => {
  const store = useSelector((store: StoreState) => store)
  const productData = [
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status: true,
      Discount: "kg",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status:true,
      Discount: "literUR",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status:true,
      Discount: "literUR",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status:true,
      Discount: "literUR",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status:true,
      Discount: "literUR",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status:true,
      Discount: "literUR",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status:true,
      Discount: "literUR",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status:true,
      Discount: "literUR",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status:true,
      Discount: "literUR",
    },
    {
      CustomerID:1,
      Name: "john",
      Address: "new karachi house b11-g4k",
      Status: true,
      Discount: "pieces",
    },
  ];
  const dispatch = useDispatch()
  return (
    <div className={`${!store.searchCustomer?"hidden":""} w-full fixed top-0 backdrop-blur-sm h-full overflow-y-auto overflow-x-hidden`}>
      <div className="w-full flex min-h-screen  items-center justify-center">
        <div className="w-full max-w-[90%] min-h-[90vh] bg-gray-300">
            <div className="flex justify-between py-1 px-3 bg-black text-white">
                <h2 className="font-bold">Article</h2>
                <button onClick={() => dispatch(searchCustomer())}>X</button>
            </div>
            <div className="w-full px-10 py-2">
                <div className="flex text-[.9rem]">
                  <ul className="flex-1 flex gap-3 bg-white font-bold text-gray-600">
                    <li className="w-full border-b-2 text-center">BasicSearch</li>
                    <li className="w-full border-b-2 text-center">BasicSearch</li>
                  </ul>
                  <div className="flex-1 flex justify-center ">
                    <select name="" id="" className="w-full max-w-[80%] px-3 border-2 border-gray-500">
                      <option value="">Option 1</option>
                      <option value="">Option 1</option>
                      <option value="">Option 1</option>
                      <option value="">Option 1</option>
                    </select>
                  </div>
                </div>
                <div className="flex mt-4 gap-3">
                  <input  onFocus={() => dispatch(keyBoardValChange(true))} className="flex-1 text-[.9rem] bg-white outline-0 py-1 px-3" placeholder="Full Text Search" type="text"  />
                  <button className="w-full max-w-[15rem] col-span-2 bg-[#009DDF] flex text-white">
                      <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-1">
                      <SearchOutlined/>
                      </div>
                      <div className="h-full w-full flex justify-center items-center px-2">
                      <h2 className="text-center text-[1.2rem]">Search</h2>
                      </div>
                  </button>
                </div>
                <div className="mt-4 overflow-auto">
                  <table className="min-w-full">
                    <thead className="text-[.8rem]">
                      <tr className="border-b-2 text-left">
                        <th className="px-3 whitespace-nowrap">Customer ID</th>
                        <th className="px-3 whitespace-nowrap">Name</th>
                        <th className="px-3 whitespace-nowrap">Address</th>
                        <th className="px-3 whitespace-nowrap">Status</th>
                        <th className="px-3 whitespace-nowrap">Discount</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#EAF0F2]">
                      {productData.map((product, index) => (
                        <tr key={index} className="text-[.9rem]">
                          <td className="px-3 py-1 whitespace-nowrap">{product.CustomerID}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.Name}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.Address}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.Status ? "Yes" : "No"}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.Discount}</td>
                        </tr>
                      ))}
                  </tbody>
                  </table>
                </div>
                <div className="flex mt-2">
                  <p className="text-[.9rem]">Page 1 of 161 (1606 results)</p>
                  <div className="flex-1 flex justify-center gap-1">
                    <button className="px-8 bg-[#009DDF] text-white rounded-sm"><DoubleArrow sx={{rotate:"180deg"}}/></button>
                    <button className="px-8 bg-[#009DDF] text-white rounded-sm"><DoubleArrow/></button>
                  </div>
                </div>
                <div className="w-full mt-8 flex flex-wrap justify-end gap-3">
                  <button className="col-span-2 bg-[#009DDF] flex text-white">
                      <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-1">
                      <Search/>
                      </div>
                      <div className="h-full w-full flex justify-center items-center px-4 py-2">
                      <h2 className="text-center text-[1rem] whitespace-nowrap">Loyalty Information</h2>
                      </div>
                  </button>
                  <button className="col-span-2 bg-[#009DDF] flex text-white">
                      <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-1">
                      <Add/>
                      </div>
                      <div className="h-full w-full flex justify-center items-center px-4 py-2">
                      <h2 className="text-center text-[1rem] whitespace-nowrap">Create customer</h2>
                      </div>
                  </button>
                  <button className="col-span-2 bg-[#009DDF] flex text-white">
                      <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-1">
                      <Edit/>
                      </div>
                      <div className="h-full w-full flex justify-center items-center px-4 py-2">
                      <h2 className="text-center text-[1rem] whitespace-nowrap">Edit customer</h2>
                      </div>
                  </button>
                  <button className="col-span-2 bg-[#009DDF] flex text-white">
                      <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-1">
                      <Add/>
                      </div>
                      <div className="h-full w-full flex justify-center items-center px-4 py-2">
                      <h2 className="text-center text-[1rem] whitespace-nowrap">Add to receipt</h2>
                      </div>
                  </button>
                  <button onClick={() => dispatch(searchCustomer())} className="col-span-2 bg-[#009DDF] flex text-white">
                      <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-1">
                      <Close color="error"/>
                      </div>
                      <div className="h-full w-full flex justify-center items-center px-4 py-2">
                      <h2 className="text-center text-[1rem] whitespace-nowrap">Close</h2>
                      </div>
                  </button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CustomerSearch