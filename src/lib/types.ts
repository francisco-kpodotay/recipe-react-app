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
  doClose: () => void;
  onViewAll: () => void;
  onClick: () => void;
}

export type idTableType = Array<[string, number[]]>;
