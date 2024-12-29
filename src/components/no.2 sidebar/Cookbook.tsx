import React, { useState } from "react";
import {
  Box,
  TextField,
} from "@mui/material";
import { useMealContext } from "../../context/FocusContext";
import { useQueries } from "@tanstack/react-query";
import { fetchData } from "../../lib/utils";
import CookbookList from "./CookbookList";

const Cookbook: React.FC = () => {
  const { mealList } = useMealContext();
  const [searchQuery, setSearchQuery] = useState("");

  // Define queries for fetching recipes
  const queries = mealList.map((id: number) => ({
    queryKey: ["cookbook", id],
    queryFn: () =>
      fetchData(
        `https://dummyjson.com/recipes/${id}?select=id,name,servings,image`
      ),
  }));

  const queryResults = useQueries({ queries });

  const mealListData = queryResults
    .filter((result) => result.isSuccess) 
    .map((result) => result.data);

  const filteredMealListData = mealListData.filter((meal) =>
    meal?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box id="cookbook-container">
      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      {/* Cookbook List */}
      <CookbookList mealListData={filteredMealListData} />
    </Box>
  );
};

export default Cookbook;
