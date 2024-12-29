import { useState, useEffect } from "react";
import { getReorganisedGroupData } from "../../lib/utils";
import FoldersSecondaryElement from "./FoldersSecondaryElement";

type mealsType = Array<[string, number[]]> | null;

export default function FoldersSecondaryElementWrapper({ data }) {
  const [categories, setCategories] = useState<mealsType>(null);
  const [categoriesState, setCategoriesState] = useState(true);
  const [cuisines, setCuisines] = useState<mealsType>(null);
  const [cuisinesState, setCuisinesState] = useState(false);
  const [tags, setTags] = useState<mealsType>(null);
  const [tagsState, setTagsState] = useState(false);

  function handleOpenClose(
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    stateSetter((prev) => !prev);
  }

  useEffect(() => {
    setCategories(getReorganisedGroupData(data, "mealType"));
    setCuisines(getReorganisedGroupData(data, "cuisines"));
    setTags(getReorganisedGroupData(data, "tags"));
  }, [data]);

  return (
    <>
      <FoldersSecondaryElement
        doOpenClose={() => handleOpenClose(setCategoriesState)}
        name="Categories"
        state={categoriesState}
        meals={categories}
      />
      <FoldersSecondaryElement
        doOpenClose={() => handleOpenClose(setCuisinesState)}
        name="Cuisines"
        state={cuisinesState}
        meals={cuisines}
      />
      <FoldersSecondaryElement
        doOpenClose={() => handleOpenClose(setTagsState)}
        name="Tags"
        state={tagsState}
        meals={tags}
      />
    </>
  );
}
