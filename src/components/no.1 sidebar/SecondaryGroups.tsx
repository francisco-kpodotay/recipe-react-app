import React, { useEffect, useState } from "react";
import { getReorganisedGroupData } from "../../lib/utils";
import { GroupDataType, MiniResponseDataType } from "../../lib/types";
import SecondaryElement from "./SecondaryElement";
import RenderLogger from "../others/RenderLogger";

const SecondaryGroups: React.FC<{ data: MiniResponseDataType }> = ({
  data,
}) => {
  const [groupData, setGroupData] = useState<GroupDataType[] | null>(null);

  function doHideAndShow(name: string) {
    setGroupData((prev) => {
      if (prev === null) return null;
      return prev.map((element) => {
        if (element.name === name) {
          return element.state === "half-open" || element.state === "open"
            ? { ...element, state: "close" }
            : { ...element, state: "half-open" };
        }
        return element;
      });
    });
  }

  function closeAllGroupExpectOne(name: string) {
    setGroupData((prev) => {
      if (prev === null) return null;
      return prev.map((element) => {
        return element.name !== name
          ? { ...element, state: "close" }
          : { ...element, state: "open" };
      });
    });
  }

  useEffect(() => {
    const groupData: GroupDataType[] = [
      {
        name: "Categories",
        state: "half-open",
        idTable: getReorganisedGroupData(data, "mealType"),
      },
      {
        name: "Cuisines",
        state: "half-open",
        idTable: getReorganisedGroupData(data, "cuisines"),
      },
      {
        name: "Tags",
        state: "half-open",
        idTable: getReorganisedGroupData(data, "tags"),
      },
    ];
    setGroupData(groupData);
    
  }, []);

  return (
    <div>
      {groupData &&
        groupData.map((groupData) => {
          return (
            <SecondaryElement
              key={groupData.name}
              {...groupData}
              doHideAndShow={doHideAndShow}
              closeAllGroupExpectOne={closeAllGroupExpectOne}
            />
          );
        })}
     
    </div>
  );
};

export default SecondaryGroups;
