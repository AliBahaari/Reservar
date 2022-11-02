import {
  HomeOutlined,
  ProductionQuantityLimitsOutlined,
} from "@mui/icons-material";
import {
  Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  menuItemClasses,
  MenuList,
  Paper,
  Chip,
  listItemTextClasses,
  typographyClasses,
} from "@mui/material";
import { styled } from "@mui/system";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";
import AddProduct from "../../containters/VendorPanel/AddProduct/AddProduct";

const RMenuItem = styled(MenuItem)(({ theme }) => ({
  [`&.${menuItemClasses.root}`]: {
    padding: theme.spacing(2),
  },
}));

const RListItemText = styled(ListItemText)(() => ({
  [`&.${listItemTextClasses.root} > .${typographyClasses.root}`]: {
    fontWeight: "bold",
  },
}));

export enum PageNames {
  AddProduct = "addProduct",
}

const Admin: NextPage = () => {
  const router = useRouter();
  const pageName = useMemo(
    () => router.query?.pageName,
    [router.query?.pageName]
  );

  const pageRenderer: Record<PageNames, ReactNode> = {
    [PageNames.AddProduct]: <AddProduct />,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper
          sx={{ maxWidth: "100%", height: "100%", borderRadius: 0 }}
          elevation={1}
        >
          <MenuList>
            <RMenuItem
              onClick={() => {
                router.push("/storePanel/dashboard");
              }}
            >
              <ListItemIcon>
                <HomeOutlined fontSize="small" color="info" />
              </ListItemIcon>
              <RListItemText>پیشخوان</RListItemText>
              <Chip
                label="اطلاعات فروش"
                variant="outlined"
                color="success"
                sx={{ cursor: "pointer" }}
              />
            </RMenuItem>
            <Divider />
            <RMenuItem
              onClick={() => {
                router.push("/storePanel/manageWebsite");
              }}
            >
              <ListItemIcon>
                <ProductionQuantityLimitsOutlined
                  fontSize="small"
                  color="info"
                />
              </ListItemIcon>
              <RListItemText>افزودن کالا</RListItemText>
            </RMenuItem>
            <Divider />
          </MenuList>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper
          sx={{ maxWidth: "100%", height: "100vh", borderRadius: 0, p: 2 }}
          elevation={0}
        >
          {pageRenderer[pageName! as keyof typeof pageRenderer]}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Admin;
