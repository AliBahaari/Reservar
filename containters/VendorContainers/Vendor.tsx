import { Box, Typography } from "@mui/material";

type VendorProps = {
  vendorId: string;
};

function Vendor({ vendorId }: VendorProps) {
  return (
    <Box>
      <Typography>Vendor: {vendorId}</Typography>
    </Box>
  );
}

export default Vendor;
