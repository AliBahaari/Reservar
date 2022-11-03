import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

type ProductCardProps = {
  productImage: string;
  productAlt: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productCurrency: string;
};

function ProductCard({
  productAlt,
  productDescription,
  productImage,
  productName,
  productPrice,
  productCurrency,
}: ProductCardProps) {
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        height="140"
        image={productImage}
        alt={productAlt}
      />
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Typography
            gutterBottom
            sx={{ fontSize: 18, fontWeight: "bold" }}
            component="div"
          >
            {productName}
          </Typography>

          <Chip color="primary" label="پکیج" variant="outlined" />
        </Box>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {productDescription}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
          {productPrice} {productCurrency}
        </Typography>
        <Button size="small" color="success" variant="outlined">
          خرید
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
