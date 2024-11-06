import React from "react";
import MainElement from "./MainElement";
import { useQuery } from "@tanstack/react-query";
import { fechData, getFavouriteRecipeIds } from "../../lib/utils";
import { miniDataUrl } from "../../lib/constants";
import SecondaryGroups from "./SecondaryGroups";

const Folders: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["miniData"],
    queryFn: () => fechData(miniDataUrl),
  });
  console.log(data);

  const numberOfRecipes: number = data && data.total;
  const numberOfFavourites = getFavouriteRecipeIds.length;

  if (isLoading) <h1>Lading...</h1>;
  if (error) <h1>Ops... Something went wrong.</h1>;

  return (
    <div>
      <div>
        <button>Hide</button>
        <p>Folders</p>
      </div>
      <div>
        <MainElement
          text="All Recipes"
          iconType="all"
          quantity={numberOfRecipes}
          onClick={() => {}}
        />
        <MainElement
          text="Favourites"
          iconType="favourite"
          quantity={numberOfFavourites}
          onClick={() => {}}
        />
      </div>
      {!isLoading && <SecondaryGroups data={data} />}
    </div>
  );
};

export default Folders;
