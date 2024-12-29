import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListItemButton, ListItemText, Collapse, List } from "@mui/material";

export default function FoldersSecondaryElement({doOpenClose, name, state, meals}) {
  return (
    <>
      <ListItemButton onClick={doOpenClose}>
        <ListItemText primary={name} />
        {state ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={state} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {meals &&
            meals.map((element, index) => {
              return (
                <ListItemButton sx={{ pl: 4 }} key={name + index}>
                  <ListItemText
                    primary={element[0]}
                    secondary={element[1].length}
                  />
                </ListItemButton>
              );
            })}
        </List>
      </Collapse>
    </>
  );
}
