import React, { useState } from "react";

function StrelkX() {
  const [count, setCount] = useState(5);
  const incrementCount = () => {
    for (let i = 0; i <= 100; i++) {
      setCount(count + 7);
      if (count > 100) {
        break;
      }
    }
  };

  return (
    <div>
      <h1> Счёт: {count} </h1>
      <button onClick={() => incrementCount()}>Прирост</button>
    </div>
  );
}


