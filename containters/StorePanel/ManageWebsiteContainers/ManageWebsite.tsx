import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  Divider,
} from "@mui/material";

function ManageWebsite() {
  return (
    <Box>
      <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
        مدیریت وبسایت
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField fullWidth label={"نام مغازه"} size="small" />
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{ width: "100%" }}
            variant="outlined"
            component="label"
            startIcon={<PhotoCamera />}
          >
            آپلود تصویر
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label={"توضیحات مغازه"}
            size="small"
            multiline
            rows={8}
          />
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              label={"وبسایت"}
              size="small"
              InputProps={{
                endAdornment: <Typography>.www</Typography>,
              }}
              inputProps={{
                style: {
                  textAlign: "left",
                },
              }}
            />
            <TextField
              fullWidth
              label={"اینستاگرام"}
              size="small"
              InputProps={{
                endAdornment: <Typography>@</Typography>,
              }}
              inputProps={{
                style: {
                  textAlign: "left",
                },
              }}
            />
            <TextField
              fullWidth
              label={"تلگرام"}
              size="small"
              InputProps={{
                endAdornment: <Typography>@</Typography>,
              }}
              inputProps={{
                style: {
                  textAlign: "left",
                },
              }}
            />
            <TextField
              fullWidth
              label={"واتس اپ"}
              size="small"
              InputProps={{
                endAdornment: <Typography>+</Typography>,
              }}
              inputProps={{
                style: {
                  textAlign: "left",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Button size="small" variant="contained" color="success">
          ذخیره
        </Button>
      </Box>
    </Box>
  );
}

export default ManageWebsite;
