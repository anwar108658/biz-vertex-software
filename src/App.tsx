import Navbar from "./components/Navbar";
import Body from "./components/Body";
import KeyBoard from "./components/KeyBoard";
import { useSelector } from "react-redux";
import Search from "./components/Search";
import CustomerSearch from "./components/CustomerSearch";
interface StoreState {
  data: string;
  keyBoard:boolean;
}

function App() {
  const store = useSelector((store: StoreState) => store)
  return (
    <>
      <Navbar />
      <Body/>
      <CustomerSearch/>
      <Search/>
      {store.keyBoard && <KeyBoard/>}
    </>
  )
}

export default App
