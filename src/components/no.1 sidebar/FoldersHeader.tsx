import { ListSubheader, Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function FoldersHeader() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  function doHideAndShow() {
    const foldersContainer = document.getElementById("folders-container")!;
    const recipeDetailContainer = document.getElementById(
      "recipe-detail-container"
    )!;

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
    <ListSubheader component="div">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          id="hide-sidebar-btn"
          onClick={doHideAndShow}
        >
          Hide
        </Button>
        <Typography sx={{ margin: 2 }}>Folders</Typography>
      </Box>
    </ListSubheader>
  );
}
