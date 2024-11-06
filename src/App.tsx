import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Folders from "./components/no.1 sidebar/Folders";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* side bar no.1 
      user can hide this, contains a hide btn, 4 lists 
      main = [all Recipe, fav]
      categories = ["mealType"]
      cuisine = ["cuisine"]
      tags = ["tags"] */}
        <Folders />

        {/* side bar no.2
      user can't hide this, contains a header, a search bar, a list of recipies */}

        {/* Recipe details 
      user can't hide this, conatins: 
      recipe details (as you can see on the img ("../bg-materrials/pestal-img.webp")) */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
