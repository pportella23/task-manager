import { useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  }

  const decrease = () => {
    if (counter === 0) {
      alert("Counter it's already zero!")
      return
    }
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="counter">
      {counter}
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}