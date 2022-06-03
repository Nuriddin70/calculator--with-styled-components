import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [ShowCalc, serShowCalc] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => serShowCalc(!ShowCalc)}>
        Show Calc
      </button>
      {ShowCalc ? <Calculator /> : null}
    </>
  );
}
export default App
