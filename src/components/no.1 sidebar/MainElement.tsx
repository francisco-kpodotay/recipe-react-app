import React from "react";
import { FaBook, FaStar } from "react-icons/fa6";


interface MainNavigationProps {
  iconType: "all" | "favourite";
  text: string;
  quantity: number;
  onClick: () => void;
}

const MainElement: React.FC<MainNavigationProps> = ({
  iconType,
  text,
  quantity,
  onClick,
}) => {
  function iconSelector(iconType: "all" | "favourite") {
    if (iconType === "all") {
      return <FaBook />;
    }
    if (iconType === "favourite") {
      return <FaStar />;
    }
  }

  return (
    <div onClick={onClick}>
      {iconSelector(iconType)} {text} {quantity}
    </div>
  );
};

export default MainElement;
