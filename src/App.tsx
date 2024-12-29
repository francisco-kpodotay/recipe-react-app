import RecipeDetail from "./components/recipe details/RecipeDetail";
import Cookbook from "./components/no.2 sidebar/Cookbook";
import Folders from "./components/no.1 sidebar/Folders";

function App() {
  return (
    <>
      {/* side bar no.1 
      user can hide this, contains a hide btn, 4 lists  
      main = [all Recipe, fav]
      categories = ["mealType"]
      cuisine = ["cuisine"]
      tags = ["tags"] */}
      {/* <Folders /> */}
      <Folders/>

      {/* side bar no.2
      user can't hide this, contains a header, a search bar, a list of recipies */}
      <Cookbook />

      {/* Recipe details 
      user can't hide this, conatins: 
      recipe details (as you can see on the img ("../bg-materrials/pestal-img.webp")) */}
      <RecipeDetail />
    </>
  );
}

export default App;
