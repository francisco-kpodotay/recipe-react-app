import {
  ResponseDataType,
  generalRecipeType,
} from "../components/no.1 sidebar/Folders";
import { GroupDataType } from "./types";

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function getFavouriteRecipeIds() {
  const data = localStorage.getItem("favouriteRecepieIds");
  return data === null ? [] : JSON.parse(data);
}

export function getReorganisedGroupData(
  data: ResponseDataType,
  type: "mealType" | "tags" | "cuisines"
): Array<[string, number[]]> {
  const categories: Array<[string, number[]]> = [];

  if (!data || !data.recipes) {
    return categories;
  }

  let map = new Map<string, number[]>();

  if (type === "cuisines") {
    data.recipes.forEach((miniRecipe: generalRecipeType) => {
      if (map.has(miniRecipe.cuisine)) {
        map.get(miniRecipe.cuisine)!.push(miniRecipe.id); // Use non-null assertion since we checked with has
      } else {
        map.set(miniRecipe.cuisine, [miniRecipe.id]);
      }
    });
  } else {
    map = countFoodTypes(data, type);
  }

  categories.push(...sortMapEntriesByArrayLength(map));
  return categories;
}

function countFoodTypes(data: ResponseDataType, type: "mealType" | "tags") {
  const map = new Map<string, number[]>();

  data.recipes.forEach((miniRecipe: generalRecipeType) => {
    miniRecipe[type].forEach((element: string) => {
      if (map.has(element)) {
        map.get(element)!.push(miniRecipe.id); // Use non-null assertion since we checked with has
      } else {
        map.set(element, [miniRecipe.id]);
      }
    });
  });

  return map;
}

// Function to convert a Map to a sorted array of entries
function sortMapEntriesByArrayLength(
  map: Map<string, number[]>
): Array<[string, number[]]> {
  return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);
}
