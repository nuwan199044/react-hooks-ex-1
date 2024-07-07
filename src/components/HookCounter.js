import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `Timer run ${count} times`
  });

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
}

export default HookCounter;
