import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <span>Hello world</span>
      <span>Yo</span>
    </div>
  );
}

export default App;
