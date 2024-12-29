import Error from "../others/Error";
import { Box, List } from "@mui/material";
import Loading from "../others/Loading";
import FoldersHeader from "./FoldersHeader";
import { fechData } from "../../lib/utils";
import StarIcon from "@mui/icons-material/Star";
import { useQuery } from "@tanstack/react-query";
import { miniDataUrl } from "../../lib/constants";
import FoldersMainElement from "./FoldersMainElement";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FoldersSecondaryElementWrapper from "./FoldersSecondaryElementWrapper";

const Folders: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["miniData"],
    queryFn: () => fechData(miniDataUrl),
  });

  if (isLoading) <Loading />;
  if (error) <Error text={error.message} />;

  return (
    <>
      <Box id="folders-container">
        <List subheader={<FoldersHeader />}>
          <FoldersMainElement text={"All Recipes"} quantity={data?.limit}>
            <MenuBookIcon />
          </FoldersMainElement>
          <FoldersMainElement text={"Favourites"} quantity={"0"}>
            <StarIcon />
          </FoldersMainElement>
          <FoldersSecondaryElementWrapper data={data} />
        </List>
      </Box>
    </>
  );
};

export default Folders;
