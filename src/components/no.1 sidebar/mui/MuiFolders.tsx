import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { miniDataUrl } from "../../../lib/constants";
import { fechData, getReorganisedGroupData } from "../../../lib/utils";
import Loading from "../../others/Loading";
import Error from "../../others/Error";

type ListData = Array<[string, number[]]> | null;

const MuiFolders: React.FC = () => {
  const [categories, setCategories] = useState<ListData>(null);
  const [categoriesState, setCategoriesState] = useState(true);
  const [cuisines, setCuisines] = useState<ListData>(null);
  const [cuisinesState, setCuisinesState] = useState(false);
  const [tags, setTags] = useState<ListData>(null);
  const [tagsState, setTagsState] = useState(false);

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const { data, error, isLoading } = useQuery({
    queryKey: ["miniData"],
    queryFn: () => fechData(miniDataUrl),
  });

  function handleOpenClose(
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    stateSetter((prev) => !prev);
  }

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

  useEffect(() => {
    setCategories(getReorganisedGroupData(data, "mealType"));
    setCuisines(getReorganisedGroupData(data, "cuisines"));
    setTags(getReorganisedGroupData(data, "tags"));
  }, [data]);

  if (isLoading) <Loading />;
  if (error) <Error text={error.message} />;

  return (
    <>
      <Box id="folders-container">
        <List
          subheader={
            <ListSubheader component="div" >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button variant="outlined" id="hide-sidebar-btn" onClick={doHideAndShow}>
                  Hide
                </Button>
                <Typography sx={{margin: 2}}>Folders</Typography>
              </Box>
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="All Recipes" secondary="50" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Favourites" secondary="0" />
          </ListItemButton>

          <ListItemButton onClick={() => handleOpenClose(setCategoriesState)}>
            <ListItemText primary="Categories" />
            {categoriesState ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={categoriesState} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {categories &&
                categories.map((element) => {
                  return (
                    <>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText
                          primary={element[0]}
                          secondary={element[1].length}
                        />
                      </ListItemButton>
                    </>
                  );
                })}
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleOpenClose(setCuisinesState)}>
            <ListItemText primary="Cuisines" />
            {cuisinesState ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={cuisinesState} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {cuisines &&
                cuisines.map((element) => {
                  return (
                    <>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText
                          primary={element[0]}
                          secondary={element[1].length}
                        />
                      </ListItemButton>
                    </>
                  );
                })}
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleOpenClose(setTagsState)}>
            <ListItemText primary="Tags" />
            {tagsState ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={tagsState} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {tags &&
                tags.map((element) => {
                  return (
                    <>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText
                          primary={element[0]}
                          secondary={element[1].length}
                        />
                      </ListItemButton>
                    </>
                  );
                })}
            </List>
          </Collapse>
        </List>
      </Box>
    </>
  );
};

export default MuiFolders;
