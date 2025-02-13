import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [vis, setVis] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Header</span>
      <button onClick={() => setVis((vis) => !vis)}>Toggle</button>
      <motion.div
        style={{ overflow: "hidden" }}
        animate={{ height: (vis ? 150 : 0) + "px" }}
        onAnimationEnd={(val) => console.log("End", val)}
        onAnimationComplete={(val) => console.log("Complete", val)}
      >
        Hello World
        <br />
        Hello World
        <br />
        Hello World
        <br />
        Hello World
        <br />
        Hello World
        <br />
        Hello World
        <br />
        Hello World
        <br />
      </motion.div>
    </div>
  );
}

export default App;
