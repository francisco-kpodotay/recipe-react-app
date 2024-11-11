import React from "react";
import { FaPlus } from "react-icons/fa6";

const CookbookHeader: React.FC = () => {
  return (
    <div>
      <div>
        <FaPlus />
      </div>
      <div>
        <p>Cookbook</p>
      </div>
    </div>
  );
};

export default CookbookHeader;
