import { useState } from "react";

// * Muy genial
const useCounter = ( initialValue = 10 ) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
}

export default useCounter;