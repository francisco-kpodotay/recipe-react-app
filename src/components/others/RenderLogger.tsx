import React, { useEffect, useRef } from "react";

const RenderLogger: React.FC<{ text: string }> = ({ text }) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`${text} re-rendered ${renderCount.current} times`);
  });

  return <></>;
};

export default RenderLogger;
