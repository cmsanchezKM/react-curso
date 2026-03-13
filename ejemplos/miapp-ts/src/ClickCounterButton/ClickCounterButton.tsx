import React, { useState } from "react";

type Props = {
  onClickCountChange: (totalClicks: number) => void;
};

const ClickCounterButton: React.FC<Props> = ({ onClickCountChange }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    onClickCountChange(newCount);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Has hecho click {count} veces
      </button>
    </div>
  );
};

export default ClickCounterButton;
