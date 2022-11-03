import { PhotoCamera, Edit, Delete } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";

type StuffListProps = {
  data: Array<{ id: number; fullName: string }>;
};

const StuffList = ({ data }: StuffListProps) => {
  const router = useRouter();

  return (
    <>
      {data?.map((dataItem) => (
        <Paper
          key={dataItem?.id}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "grey.100",
            px: 2,
            py: 1,
            my: 1,
          }}
          elevation={0}
        >
          <Typography>{dataItem?.fullName}</Typography>

          <Box>
            <IconButton
              color="info"
              onClick={() =>
                router.push({
                  pathname: "/storePanel/reservation",
                  query: {
                    id: dataItem?.id,
                  },
                })
              }
            >
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => alert(dataItem?.id)}>
              <Delete />
            </IconButton>
          </Box>
        </Paper>
      ))}
    </>
  );
};

export default StuffList;
