import React, { useEffect, useState } from "react";
import { getReorganisedGroupData } from "../../lib/utils";
import { GroupDataType, MiniResponseDataType } from "../../lib/types";
import SecondaryElement from "./SecondaryElement";

const SecondaryGroups: React.FC<{ data: MiniResponseDataType }> = ({ data }) => {
  const [groupData, setGroupData] = useState<GroupDataType[] | null>(null);

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
          return <SecondaryElement key={groupData.name} {...groupData} />;
        })}
    </div>
  );
};

export default SecondaryGroups;
