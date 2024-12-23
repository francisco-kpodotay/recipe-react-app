import { defaultNumberOfElementsInGroup } from "../../lib/constants";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { GroupDataType, GroupMetodesType } from "../../lib/types";
import RenderLogger from "../others/RenderLogger";

const SecondaryElement: React.FC<GroupDataType & GroupMetodesType> = ({
  name,
  state,
  idTable,
  doHideAndShow,
  closeAllGroupExpectOne,
}) => {
  const defaultShownNumber = defaultNumberOfElementsInGroup;

  const renderElements = () => {
    return idTable.map((element, index) => {
      const showElement =
        state === "open" ||
        (state === "half-open" && index < defaultShownNumber);
      if (showElement) {
        return (
          <span
            key={element[0]}
            onClick={() => {
              console.log(element);
            }}
          >
            <p>{element[0]}</p>
            <p>{element[1].length}</p>
          </span>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <span onClick={() => doHideAndShow(name)}>
        <p>{name}</p>
        {state === "close" ? <FaAngleUp /> : <FaAngleDown />}
      </span>

      {state !== "close" && (
        <div>
          {renderElements()}
          {state === "half-open" && (
            <p onClick={() => closeAllGroupExpectOne(name)}>
              View All Categories
            </p>
          )}
        </div>
      )}
      <RenderLogger text={"SecondaryElement"} />

      <br />
      <br />
    </div>
  );
};

export default SecondaryElement;
