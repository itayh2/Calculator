import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      try {
        setResult(eval(calc + value).toString());
      } catch (error) {
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
    try {
      setCalc(eval(calc).toString());
    } catch (error) {
      setCalc("Error");
    }
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);

    if (ops.includes(value.slice(-1))) {
      try {
        setResult(eval(value.toString().slice(0, -1)));
      } catch (error) {
        setResult("Error");
      }
    } else {
      try {
        setResult(eval(value).toString());
      } catch (error) {
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
