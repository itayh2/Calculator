import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  // Safe calculation function
  const safeCalculate = (expression) => {
    try {
      // Use Function constructor instead of eval
      // eslint-disable-next-line no-new-func
      return new Function('return ' + expression)();
    } catch (error) {
      return "Error";
    }
  };

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    const newCalc = calc + value;
    setCalc(newCalc);
    
    if (!ops.includes(value)) {
      try {
        setResult(safeCalculate(newCalc).toString());
      } catch {
        setResult("Error");
      }
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    if (calc === "") {
      return;
    }
    // Check if the expression ends with an operator
    const lastChar = calc.slice(-1);
    if(ops.includes(lastChar)){
      return;
    }
    
    try {
      const calculatedResult = safeCalculate(calc);
      setCalc(calculatedResult.toString());
      setResult("");
    } catch {
      setCalc("Error");
    }
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    
    if (value === "") {
      setResult("");
    } else {
      try {
        // Only calculate result if last character is not an operator
        if (!ops.includes(value.slice(-1))) {
          setResult(safeCalculate(value).toString());
        }
      } catch {
        setResult("Error");
      }
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;{calc || 0}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>÷</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;