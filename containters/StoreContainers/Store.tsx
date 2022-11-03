import { Avatar, Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMemo } from "react";

const StoreMap = dynamic(() => import("../../components/Map"), { ssr: false });

const Store = () => {
  const router = useRouter();
  const storeName = useMemo(
    () => router.query?.storeName,
    [router.query?.storeName]
  );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          gap: 2,
        }}
      >
        <Avatar src={""} sx={{ width: 200, height: 200, mb: 2 }}></Avatar>
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
          {storeName}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <StoreMap
              width={"100%"}
              height={"200px"}
              markerTitle={"متن آزمایشی"}
            />
          </Grid>
        </Grid>

        {/**
         * Reservation System
         */}
      </Box>
    </Box>
  );
};

export default Store;
