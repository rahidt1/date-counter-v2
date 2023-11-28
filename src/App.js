import { useState } from "react";

function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Nov 22 2023");
  date.setDate(date.getDate() + count);

  function countForward() {
    return setCount((c) => c + step);
  }
  function countBackward() {
    return setCount((c) => c - step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="center">
      <div>
        <div>
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={(e) => setStep(+e.target.value)}
          />
          <span>Step {step}</span>
        </div>
        <div>
          <button onClick={countBackward}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
          <button onClick={countForward}>+</button>
        </div>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()} </span>
      </p>
      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}

export default App;
