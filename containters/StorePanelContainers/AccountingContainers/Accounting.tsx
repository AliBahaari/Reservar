import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  Divider,
  TextField,
  styled,
} from "@mui/material";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import { Close } from "@mui/icons-material";
import { commafy } from "../../../utils/Commafy";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { clockNumberClasses } from "@mui/x-date-pickers";
import AdapterJalali from "@date-io/date-fns-jalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function Accounting() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [rowData] = useState([
    {
      id: "1234567890",
      idPrice: "10000",
      idDateTime: "21:30:00 - 1401/06/15",
      idDescription: "متن آزمایشی",
    },
  ]);

  const [columnDefs] = useState<ColDef[]>([
    { field: "id", headerName: "شناسه" },
    {
      field: "idPrice",
      headerName: "مبلغ",
      cellRenderer: (params: ICellRendererParams) => {
        return commafy(params?.value);
      },
    },
    { field: "idDateTime", headerName: "تاریخ و ساعت" },
    { field: "idDescription", headerName: "توضیحات" },
    {
      field: "idDelete",
      headerName: "",
      cellRenderer: (params: ICellRendererParams) => {
        return (
          <Button
            size="small"
            color="error"
            variant="outlined"
            sx={{ width: "100%" }}
          >
            حذف
          </Button>
        );
      },
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      flex: 1,
      resizable: true,
      suppressMovable: true,
    }),
    []
  );

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(
    () => ({ height: "100%", width: "100%", fontFamily: "inherit" }),
    []
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="outlined"
          color="success"
          sx={{ mb: 2 }}
          size="small"
          onClick={() => setModalOpen(true)}
        >
          ایجاد رسید
        </Button>
      </Box>
      <Box style={containerStyle}>
        <Box className="ag-theme-alpine" style={gridStyle}>
          <AgGridReact
            editType={"fullRow"}
            enableRtl={true}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          ></AgGridReact>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "4px",
          my: 5,
          border: 1,
          borderColor: ({ palette }) => palette.grey[200],
          p: 3,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
          کل دریافتی:
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 20,
            color: ({ palette }) => palette.success.light,
          }}
        >
          100000
        </Typography>
        <Typography sx={{ fontSize: 10 }}>تومان</Typography>
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
              ایجاد رسید
            </Typography>

            <Box sx={{ cursor: "pointer" }} onClick={() => setModalOpen(false)}>
              <Close />
            </Box>
          </Box>

          <Divider />

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={4}>
              <TextField label={"شناسه رسید"} size="small" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField label={"مبلغ"} size="small" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <LocalizationProvider dateAdapter={AdapterJalali}>
                <DateTimePicker
                  inputFormat="yyyy/MM/dd - HH:mm:ss"
                  label="تاریخ و ساعت"
                  onChange={() => {}}
                  value={new Date()}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth size="small" />
                  )}
                  ampm={false}
                  PopperProps={{
                    sx: {
                      [`& .${clockNumberClasses.root}`]: {
                        fontFamily: "Vazirmatn",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"توضیحات"}
                multiline
                rows={3}
                size="small"
                fullWidth
              />
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
    </>
  );
}

export default Accounting;
