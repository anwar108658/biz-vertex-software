import React, { useState, useEffect, useRef } from "react";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

const LaptopKeyboard: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [layout, setLayout] = useState<"default" | "numeric">("default");
  const keyboardRef = useRef<Keyboard | null>(null);

  // Function to handle input changes
  const handleChange = (newInput: string) => {
    setInput(newInput);
  };

  // Function to toggle between QWERTY and Numeric keyboard
  const toggleLayout = () => {
    setLayout(layout === "default" ? "numeric" : "default");
  };

  useEffect(() => {
    if (!keyboardRef.current) {
      keyboardRef.current = new Keyboard(".simple-keyboard", {
        layoutName: layout,
        layout: {
          default: [
            "q w e r t y u i o p",
            "a s d f g h j k l {enter}",
            "z x c v b n m , . / ",
            "{space}"
          ],
          numeric: [
            "1 2 3",
            "4 5 6",
            "7 8 9",
            ". 0 {bksp}"
          ]
        },
        onChange: handleChange
      });
    }

    keyboardRef.current.setOptions({
      layoutName: layout
    });
  }, [layout]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Virtual Laptop Keyboard</h2>

      {/* Input Field */}
      <input
        value={input}
        placeholder="Type here..."
        readOnly
        className="w-3/4 p-2 text-lg border rounded-lg text-center mb-4"
      />

      {/* Toggle Button for Switching Layout */}
      <button
        onClick={toggleLayout}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        {layout === "default" ? "Switch to Numeric" : "Switch to QWERTY"}
      </button>

      {/* Virtual Keyboard */}
      <div className="simple-keyboard"></div>
    </div>
  );
};

export default LaptopKeyboard;
