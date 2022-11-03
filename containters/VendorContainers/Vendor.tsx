import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ProductCard from "../../components/VendorComponents/ProductCard";

type VendorProps = {
  vendorId: string;
};

function Vendor({ vendorId }: VendorProps) {
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
          {vendorId}
        </Typography>
        <Typography>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ width: "80%", mx: "auto", mt: 4 }}>
        <Grid item xs={3}>
          <Paper variant={"outlined"} sx={{ p: 2 }}>
            <TextField label={"جست و جو"} size="small" fullWidth />

            {/**
             * Filters
             */}
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ProductCard
                productImage={"https://via.placeholder.com/500"}
                productAlt={"ProductImage"}
                productName={"متن آزمایشی"}
                productDescription={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                }
                productPrice={150000}
                productCurrency={"تومان"}
              />
            </Grid>
            <Grid item xs={4}>
              <ProductCard
                productImage={"https://via.placeholder.com/500"}
                productAlt={"ProductImage"}
                productName={"متن آزمایشی"}
                productDescription={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                }
                productPrice={150000}
                productCurrency={"تومان"}
              />
            </Grid>
            <Grid item xs={4}>
              <ProductCard
                productImage={"https://via.placeholder.com/500"}
                productAlt={"ProductImage"}
                productName={"متن آزمایشی"}
                productDescription={
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                }
                productPrice={150000}
                productCurrency={"تومان"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Vendor;
