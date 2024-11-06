import { defaultNumberOfElementsInGroup } from "../../lib/constants";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import { GroupDataType } from "../../lib/types";

const SecondaryGroups: React.FC<GroupDataType> = ({ name, state, idTable }) => {
  const defaultShownNumber = defaultNumberOfElementsInGroup;
  const [shownNumber, setShownNumber] = useState(defaultShownNumber);

  function handelViewAll() {}

  return (
    <div>
      <span>
        <p>{name}</p>
        {state === "close" ? (
          <FaAngleUp onClick={() => {}} />
        ) : (
          <FaAngleDown onClick={() => {}} />
        )}
      </span>
      {state !== "close" && (
        <div>
          {idTable.map((element, index) => {
            return (
              index < shownNumber && (
                <span key={element[0]}>
                  <p>{element[0]}</p>
                  <p>{element[1].length}</p> 
                </span>
              )
            );
          })}

          {state !== "open" && (
            <p onClick={handelViewAll}>View All Categories</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SecondaryGroups;
