import MainElement from "./MainElement";
import { useQuery } from "@tanstack/react-query";
import { fechData, getFavouriteRecipeIds } from "../../lib/utils";
import { miniDataUrl } from "../../lib/constants";
import SecondaryGroups from "./SecondaryGroups";
import Error from "../others/Error";
import Loading from "../others/Loading";
import { useState } from "react";

const Folders: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["miniData"],
    queryFn: () => fechData(miniDataUrl),
  });

  const numberOfRecipes: number = data && data.total;
  const numberOfFavourites = getFavouriteRecipeIds.length;

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  if (isLoading) <Loading />;
  if (error) <Error text={error.message} />;

  function doHideAndShow() {
    const foldersContainer = document.getElementById("folders-container")!;
    const recipeDetailContainer = document.getElementById("recipe-detail-container")!;

    if (isSidebarVisible) {
      foldersContainer.style.width = "0";
      recipeDetailContainer.style.width = "79vw";
      setIsSidebarVisible(false);
    } else {
      recipeDetailContainer.style.width = "58vw";
      foldersContainer.style.width = "21vw";
      setIsSidebarVisible(true);
    }
  }

  return (
    <div id="folders-container">
      <div>
        <button id="hide-sidebar-btn" onClick={doHideAndShow}>
          Hide
        </button>
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
    </div>
  );
};

export default Folders;

