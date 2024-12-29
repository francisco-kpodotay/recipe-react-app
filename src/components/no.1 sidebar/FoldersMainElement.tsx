import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode } from "react";

interface FoldersMainElementProps {
  text: string;
  quantity: string | number;
  children: ReactNode;
}

export default function FoldersMainElement({
  text,
  quantity,
  children,
}: FoldersMainElementProps) {
  return (
    <ListItemButton>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} secondary={quantity} />
    </ListItemButton>
  );
}
