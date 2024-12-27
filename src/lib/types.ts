export interface MiniResponseDataType {
  recipes: MiniRecipeType[];
  total: number;
  skip: number;
  limit: number;
}

interface MiniRecipeType {
  id: number;
  cuisine: string;
  mealType: string[];
  tags: string[];
}

export interface GroupDataType {
  name: string;
  state: "close" | "half-open" | "open";
  idTable: idTableType;
}

export interface GroupMetodesType {
  doHideAndShow: (name: GroupDataType['name']) => void;
  closeAllGroupExpectOne: (name: GroupDataType['name']) => void;
 /*  onClick: () => void; */
}

export type idTableType = Array<[string, number[]]>;

export type IconType = "FoldersMainElement" | "StarIcon";