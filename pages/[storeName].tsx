import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMemo } from "react";

const StoreMap = dynamic(() => import("../components/Map"), { ssr: false });

const StoreName = () => {
  const router = useRouter();
  const storeName = useMemo(
    () => router.query?.storeName,
    [router.query?.storeName]
  );

  return (
    <Box>
      <Typography>{storeName}</Typography>
      <StoreMap />
    </Box>
  );
};

export default StoreName;
