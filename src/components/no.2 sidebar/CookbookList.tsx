import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

export default function CookbookList({ mealListData }) {
  return (
    <>
      {mealListData.map((meal) => (
        <Card key={meal.id}>
          <CardMedia
            sx={{ height: 140 }}
            image={meal.image} // Use the image URL from the meal data
          />
          <CardContent>
            <Typography sx={{ color: "text.secondary" }}>
              {meal.name}
            </Typography>
            <Typography>
              Servings: {meal.servings}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
