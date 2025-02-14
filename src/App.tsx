import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

function App() {
  const [vis, setVis] = useState(true);
  const [shown, setShown] = useState(true);
  const [rendered, setRendered] = useState(false);
  const [addedLines, setAddedLines] = useState(0);
  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Header</span>

      <button onClick={() => setShown((vis) => !vis)}>Toggle</button>
      <button onClick={() => setAddedLines((x) => x + 1)}>Add content</button>
      <AnimatePresence>
        {shown ? (
          <motion.div
            style={{ overflow: "hidden" }}
            animate={{ height: "auto" }}
            initial={rendered ? { height: 0 } : false}
            exit={{ height: 0 }}
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
            {Array.from({ length: addedLines }).map((_, idx) => (
              <>
                Hello World
                <br />
                Hello World
                <br />
              </>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button onClick={() => setVis((vis) => !vis)}>Toggle</button>
      {
        <motion.div style={{ overflow: "hidden" }} animate={{ height: (vis ? 150 : 0) + "px" }}>
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
      }
    </div>
  );
}

export default App;
