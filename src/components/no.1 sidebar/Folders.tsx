import React from "react";
import MainElement from "./MainElement";
import { useQuery } from "@tanstack/react-query";
import { fechData, getFavouriteRecipeIds } from "../../lib/utils";
import { miniDataUrl } from "../../lib/constants";
import SecondaryGroups from "./SecondaryGroups";
import RenderLogger from "../others/RenderLogger";
import Error from "../others/Error";
import Loading from "../others/Loading";

const Folders: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["miniData"],
    queryFn: () => fechData(miniDataUrl),
  });
  console.log(data);

  const numberOfRecipes: number = data && data.total;
  const numberOfFavourites = getFavouriteRecipeIds.length;

  if (isLoading) <Loading/>
  if (error) <Error text={error.message}/>

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
      {data && <SecondaryGroups data={data} />}
      <RenderLogger text={"Folders"}/>
    </div>
  );
};

export default Folders;