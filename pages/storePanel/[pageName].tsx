import {
  HomeOutlined,
  TableRowsOutlined,
  ExitToAppOutlined,
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
import Dashboard from "../../containters/StorePanelContainers/DashboardContainers/Dashboard";
import Reservation from "../../containters/StorePanelContainers/ReservationContainers/Reservation";
import Products from "../../containters/StorePanelContainers/ProductsContainers/Products";
import Accounting from "../../containters/StorePanelContainers/AccountingContainers/Accounting";
import ManageWebsite from "../../containters/StorePanelContainers/ManageWebsiteContainers/ManageWebsite";

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
  Dashboard = "dashboard",
  ManageWebsite = "manageWebsite",
  Reservation = "reservation",
  Products = "products",
  Accounting = "accounting",
}

const Admin: NextPage = () => {
  const router = useRouter();
  const pageName = useMemo(
    () => router.query?.pageName,
    [router.query?.pageName]
  );

  const pageRenderer: Record<PageNames, ReactNode> = {
    [PageNames.Dashboard]: <Dashboard />,
    [PageNames.ManageWebsite]: <ManageWebsite />,
    [PageNames.Reservation]: <Reservation />,
    [PageNames.Products]: <Products />,
    [PageNames.Accounting]: <Accounting />,
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
            </RMenuItem>
            <Divider />
            <RMenuItem
              onClick={() => {
                router.push("/storePanel/manageWebsite");
              }}
            >
              <ListItemIcon>
                <TableRowsOutlined fontSize="small" color="info" />
              </ListItemIcon>
              <RListItemText>مدیریت وبسایت</RListItemText>
            </RMenuItem>
            <Divider />
            <RMenuItem
              onClick={() => {
                router.push("/storePanel/reservation");
              }}
            >
              <ListItemIcon>
                <TableRowsOutlined fontSize="small" color="info" />
              </ListItemIcon>
              <RListItemText>رزرواسیون</RListItemText>
            </RMenuItem>
            <Divider />
            <RMenuItem
              onClick={() => {
                router.push("/storePanel/accounting");
              }}
            >
              <ListItemIcon>
                <TableRowsOutlined fontSize="small" color="info" />
              </ListItemIcon>
              <RListItemText>حسابداری و رسید</RListItemText>
            </RMenuItem>
            <Divider />
            <RMenuItem
              onClick={() => {
                router.push("/storePanel/products");
              }}
            >
              <ListItemIcon>
                <TableRowsOutlined fontSize="small" color="info" />
              </ListItemIcon>
              <RListItemText>محصولات</RListItemText>
              <Chip
                label="خرید"
                variant="outlined"
                color="success"
                sx={{ cursor: "pointer" }}
              />
            </RMenuItem>
            <Divider />
            <RMenuItem>
              <ListItemIcon>
                <ExitToAppOutlined fontSize="small" color="info" />
              </ListItemIcon>
              <RListItemText>خروج</RListItemText>
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
