import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import { addVal, keyBoardVal, removeVal } from "../store/Slices/getValSlice";
import { KeyboardArrowDown } from "@mui/icons-material";

const LaptopKeyboard: React.FC = () => {
  const dispatch = useDispatch();
  const [layout, setLayout] = useState<"default" | "numeric">("default");
  const [caps, setCaps] = useState<boolean>(false);
  const keyboardRef = useRef<Keyboard | null>(null);

  // ✅ Handle key press (dispatch only the character clicked)
  const handleKeyPress = (button: string) => {
    if (button === "{caps}") {
      setCaps((prev) => !prev); // Toggle caps state
    } else if (button === "{bksp}") {
      dispatch(removeVal())
    } else if (button === "{enter}" || button === "{space}") {
      // Ignore or handle enter and space separately
    } else {
      dispatch(addVal(button)); // ✅ Dispatch only the pressed character
    }
  };

  // ✅ Toggle between QWERTY and Numeric layouts
  const toggleLayout = () => {
    setLayout(layout === "default" ? "numeric" : "default");
  };

  // ✅ Function to get the correct keyboard layout based on caps state
  const getLayout = () => ({
    default: caps
      ? [
          "Q W E R T Y U I O P {bksp}",
          "{caps} A S D F G H J K L {enter}",
          "Z X C V B N M , . /",
          "{space}",
        ]
      : [
          "q w e r t y u i o p {bksp}",
          "{caps} a s d f g h j k l {enter}",
          "z x c v b n m , . /",
          "{space}",
        ],
    numeric: ["1 2 3", "4 5 6", "7 8 9", ". 0 {bksp}"],
  });

  // ✅ Initialize keyboard and update layout dynamically
  useEffect(() => {
    if (!keyboardRef.current) {
      keyboardRef.current = new Keyboard(".simple-keyboard", {
        layoutName: layout,
        layout: getLayout(),
        onKeyPress: handleKeyPress,
      });
    }

    if (keyboardRef.current) {
      keyboardRef.current.setOptions({
        layoutName: layout,
        layout: getLayout(), // ✅ Properly update layout on Caps change
        onKeyPress: handleKeyPress,
      });
    }
  }, [layout, caps]); // Re-run when layout or caps changes

  return (
    <div className="absolute w-full bottom-0 z-10 shadow-lg shadow-blue-900 flex flex-col p-2 bg-gray-300">
      <div className="flex">
      <button
        onClick={toggleLayout}
        className="px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        {layout === "default" ? "Switch to Numeric" : "Switch to QWERTY"}
      </button>
      <div className="flex-1 flex justify-center items-center">
      <button onClick={() => dispatch(keyBoardVal())} className="shadow-lg bg-gray-200 px-4 py-1 ">
        <KeyboardArrowDown/>
      </button>
      </div>
      </div>
      <div className="simple-keyboard"></div>
    </div>
  );
};

export default LaptopKeyboard;
