import { Close, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";
import FacilityList from "./FacilityList";
import StuffList from "./StuffList";

const Reservation = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <Button
          color="success"
          variant="outlined"
          size="small"
          onClick={() => setModalOpen(true)}
        >
          ایجاد خدمات
        </Button>
      </Box>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            borderRadius: ({ spacing }) => spacing(2),
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              ایجاد خدمات
            </Typography>

            <Box sx={{ cursor: "pointer" }} onClick={() => setModalOpen(false)}>
              <Close />
            </Box>
          </Box>

          <Divider />

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={8}>
              <TextField label={"نام"} size="small" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField label={"زمان مورد نیاز"} size="small" fullWidth />
            </Grid>
            <Grid item xs={12}>
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
      </Modal>

      <FacilityList>
        <StuffList data={[{ id: 1000, fullName: "علی بهاری" }]} />
      </FacilityList>
    </Box>
  );
};

export default Reservation;
