import { Add, Close, CopyAll, DoubleArrow, SearchOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { keyBoardValChange, searchOpen } from "../store/Slices/getValSlice"


interface StoreState {
  data: string;
  isSearch:boolean
}

const Search = () => {
  const store = useSelector((store: StoreState) => store)
  const productData = [
    {
      Article:1,
      active: true,
      priceCurrency: "USD",
      baseQuantity: 10,
      baseQuantityTy: "kg",
      description: "Premium quality organic apples",
      gtin: "0123456789012",
      productCategory: "Fruits",
      batch: "BATCH202502",
      serial: "SN123456789",
      discount: "10%",
      scaleGroup: "Group A",
      deposite: "5 USD",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "EUR",
      baseQuantity: 5,
      baseQuantityTy: "liters",
      description: "Freshly squeezed orange juice",
      gtin: "0987654321098",
      productCategory: "Beverages",
      batch: "BATCH202503",
      serial: "SN987654321",
      discount: "15%",
      scaleGroup: "Group B",
      deposite: "3 EUR",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "EUR",
      baseQuantity: 5,
      baseQuantityTy: "liters",
      description: "Freshly squeezed orange juice",
      gtin: "0987654321098",
      productCategory: "Beverages",
      batch: "BATCH202503",
      serial: "SN987654321",
      discount: "15%",
      scaleGroup: "Group B",
      deposite: "3 EUR",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "EUR",
      baseQuantity: 5,
      baseQuantityTy: "liters",
      description: "Freshly squeezed orange juice",
      gtin: "0987654321098",
      productCategory: "Beverages",
      batch: "BATCH202503",
      serial: "SN987654321",
      discount: "15%",
      scaleGroup: "Group B",
      deposite: "3 EUR",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "EUR",
      baseQuantity: 5,
      baseQuantityTy: "liters",
      description: "Freshly squeezed orange juice",
      gtin: "0987654321098",
      productCategory: "Beverages",
      batch: "BATCH202503",
      serial: "SN987654321",
      discount: "15%",
      scaleGroup: "Group B",
      deposite: "3 EUR",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "EUR",
      baseQuantity: 5,
      baseQuantityTy: "liters",
      description: "Freshly squeezed orange juice",
      gtin: "0987654321098",
      productCategory: "Beverages",
      batch: "BATCH202503",
      serial: "SN987654321",
      discount: "15%",
      scaleGroup: "Group B",
      deposite: "3 EUR",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "EUR",
      baseQuantity: 5,
      baseQuantityTy: "liters",
      description: "Freshly squeezed orange juice",
      gtin: "0987654321098",
      productCategory: "Beverages",
      batch: "BATCH202503",
      serial: "SN987654321",
      discount: "15%",
      scaleGroup: "Group B",
      deposite: "3 EUR",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "EUR",
      baseQuantity: 5,
      baseQuantityTy: "liters",
      description: "Freshly squeezed orange juice",
      gtin: "0987654321098",
      productCategory: "Beverages",
      batch: "BATCH202503",
      serial: "SN987654321",
      discount: "15%",
      scaleGroup: "Group B",
      deposite: "3 EUR",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "EUR",
      baseQuantity: 5,
      baseQuantityTy: "liters",
      description: "Freshly squeezed orange juice",
      gtin: "0987654321098",
      productCategory: "Beverages",
      batch: "BATCH202503",
      serial: "SN987654321",
      discount: "15%",
      scaleGroup: "Group B",
      deposite: "3 EUR",
    },
    {
      Article:1,
      active: true,
      priceCurrency: "GBP",
      baseQuantity: 20,
      baseQuantityTy: "pieces",
      description: "Handmade ceramic plates",
      gtin: "1122334455667",
      productCategory: "Home Decor",
      batch: "BATCH202504",
      serial: "SN112233445",
      discount: "5%",
      scaleGroup: "Group C",
      deposite: "10 GBP",
    },
  ];
  const dispatch = useDispatch()
  return (
    <div className={`${!store.isSearch?"hidden":""} w-full fixed top-0 backdrop-blur-sm h-full overflow-y-auto overflow-x-hidden`}>
      <div className="w-full flex min-h-screen  items-center justify-center">
        <div className="w-full max-w-[90%] min-h-[90vh] bg-gray-300">
            <div className="flex justify-between py-1 px-3 bg-black text-white">
                <h2 className="font-bold">Article</h2>
                <button onClick={() => dispatch(searchOpen())}>X</button>
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
                      <tr className="border-b-2">
                        <th className="px-3 whitespace-nowrap">Article ID</th>
                        <th className="px-3 whitespace-nowrap">Active</th>
                        <th className="px-3 whitespace-nowrap">Price Currency</th>
                        <th className="px-3 whitespace-nowrap">Base Quantity</th>
                        <th className="px-3 whitespace-nowrap">Base Quantity ty</th>
                        <th className="px-3 whitespace-nowrap">Description</th>
                        <th className="px-3 whitespace-nowrap">GTIN</th>
                        <th className="px-3 whitespace-nowrap">Product category</th>
                        <th className="px-3 whitespace-nowrap">Batch</th>
                        <th className="px-3 whitespace-nowrap">Serial</th>
                        <th className="px-3 whitespace-nowrap">Discount</th>
                        <th className="px-3 whitespace-nowrap">Scale group</th>
                        <th className="px-3 whitespace-nowrap">Deposite</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#EAF0F2]">
                      {productData.map((product, index) => (
                        <tr key={index} className="text-[.9rem]">
                          <td className="px-3 py-1 whitespace-nowrap">{product.Article}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.active ? "Yes" : "No"}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.priceCurrency}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.baseQuantity}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.baseQuantityTy}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.description}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.gtin}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.productCategory}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.batch}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.serial}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.discount}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.scaleGroup}</td>
                          <td className="px-3 py-1 whitespace-nowrap">{product.deposite}</td>
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
                      <CopyAll/>
                      </div>
                      <div className="h-full w-full flex justify-center items-center px-4 py-2">
                      <h2 className="text-center text-[1rem] whitespace-nowrap">Display Long Text</h2>
                      </div>
                  </button>
                  <button className="col-span-2 bg-[#009DDF] flex text-white">
                      <div className="h-full bg-[#1280C2] flex flex-col justify-center px-3 py-1">
                      <Add/>
                      </div>
                      <div className="h-full w-full flex justify-center items-center px-4 py-2">
                      <h2 className="text-center text-[1rem] whitespace-nowrap">Add to reciept</h2>
                      </div>
                  </button>
                  <button onClick={() => dispatch(searchOpen())} className="col-span-2 bg-[#009DDF] flex text-white">
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

export default Search