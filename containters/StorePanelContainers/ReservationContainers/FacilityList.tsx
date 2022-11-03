import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Modal,
  IconButton,
  Typography,
  Grid,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  TextFieldProps,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AdapterJalali from "@date-io/date-fns-jalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  ReactNode,
  useState,
  useMemo,
  JSXElementConstructor,
  ReactElement,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Add, Close, ExpandMoreOutlined } from "@mui/icons-material";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import {
  clockNumberClasses,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

type FacilityListProps = {
  children: ReactNode;
};

enum ShiftsEnum {
  Morning = 1,
  Evening = 2,
  Night = 3,
}

function FacilityList({ children }: FacilityListProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<boolean>(false);
  const [rent, setRent] = useState<boolean>(false);
  const [rentDate, setRentDate] = useState<Date>(new Date());
  const [commission, setCommission] = useState<boolean>(false);
  const [vip, setVip] = useState<boolean>(false);
  const [crypto, setCrypto] = useState<boolean>(false);
  const [cryptoName, setCryptoName] = useState<string>("");

  const [rowData] = useState([
    {
      rowFlag: ShiftsEnum.Morning,
      saturdayEntry: "",
      saturdayExit: "",
      sundayEntry: "",
      sundayExit: "",
      mondayEntry: "",
      mondayExit: "",
      tuesdayEntry: "",
      tuesdayExit: "",
      wednesdayEntry: "",
      wednesdayExit: "",
      thursdayEntry: "",
      thursdayExit: "",
      fridayEntry: "",
      fridayExit: "",
    },
    {
      rowFlag: ShiftsEnum.Evening,
      saturdayEntry: "",
      saturdayExit: "",
      sundayEntry: "",
      sundayExit: "",
      mondayEntry: "",
      mondayExit: "",
      tuesdayEntry: "",
      tuesdayExit: "",
      wednesdayEntry: "",
      wednesdayExit: "",
      thursdayEntry: "",
      thursdayExit: "",
      fridayEntry: "",
      fridayExit: "",
    },
    {
      rowFlag: ShiftsEnum.Night,
      saturdayEntry: "",
      saturdayExit: "",
      sundayEntry: "",
      sundayExit: "",
      mondayEntry: "",
      mondayExit: "",
      tuesdayEntry: "",
      tuesdayExit: "",
      wednesdayEntry: "",
      wednesdayExit: "",
      thursdayEntry: "",
      thursdayExit: "",
      fridayEntry: "",
      fridayExit: "",
    },
  ]);

  // eslint-disable-next-line react/display-name
  const CustomCellEditor = forwardRef((props: ICellRendererParams, ref) => {
    const [selectedValue, setSelectedValue] = useState(props.value);

    useImperativeHandle(ref, () => {
      return {
        getValue() {
          return selectedValue;
        },
      };
    });

    const onChangeHandler = (value: Date | null) => {
      setSelectedValue(value);
    };

    return (
      <LocalizationProvider dateAdapter={AdapterJalali}>
        <TimePicker
          onChange={onChangeHandler}
          value={selectedValue}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              size="small"
              inputProps={{
                ...params.inputProps,
                placeholder: "انتخاب کنید...",
              }}
            />
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
    );
  });

  // eslint-disable-next-line react/display-name
  const CustomCellRenderer = forwardRef((props: ICellRendererParams, ref) => {
    return (
      <LocalizationProvider dateAdapter={AdapterJalali}>
        <TimePicker
          onChange={() => {}}
          value={props?.value}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              size="small"
              inputProps={{
                ...params.inputProps,
                placeholder: "ساعت و دقیقه",
              }}
            />
          )}
          ampm={false}
          readOnly
        />
      </LocalizationProvider>
    );
  });

  const CellStyle = useMemo(() => {
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  }, []);

  const rowFlagCellRenderer = useMemo(() => {
    return {
      field: "rowFlag",
      headerName: "",
      maxWidth: 40,
      editable: false,
      cellRenderer: (params: ICellRendererParams) => {
        const boxDimensions = {
          width: 20,
          height: 20,
          borderRadius: 1,
        };

        const rowFlagBox: Record<ShiftsEnum, ReactNode> = {
          [ShiftsEnum.Morning]: (
            <Tooltip title="شیفت صبح تا ظهر" placement="top">
              <Box sx={{ ...boxDimensions, backgroundColor: "#FFD791" }}></Box>
            </Tooltip>
          ),
          [ShiftsEnum.Evening]: (
            <Tooltip title="شیفت ظهر تا عصر" placement="top">
              <Box sx={{ ...boxDimensions, backgroundColor: "#D992B0" }}></Box>
            </Tooltip>
          ),
          [ShiftsEnum.Night]: (
            <Tooltip title="شیفت عصر تا شب" placement="top">
              <Box sx={{ ...boxDimensions, backgroundColor: "#6E6093" }}></Box>
            </Tooltip>
          ),
        };

        return rowFlagBox[params?.value as 1 | 2 | 3];
      },
      cellStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    };
  }, []);

  const [columnDefs] = useState<ColDef[]>([
    rowFlagCellRenderer,
    {
      field: "saturdayEntry",
      headerName: "شنبه (ورود)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "saturdayExit",
      headerName: "شنبه (خروج)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "sundayEntry",
      headerName: "یکشنبه (ورود)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "sundayExit",
      headerName: "یکشنبه (خروج)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "mondayEntry",
      headerName: "دوشنبه (ورود)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "mondayExit",
      headerName: "دوشنبه (خروج)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
  ]);

  const [anotherColumnDefs] = useState<ColDef[]>([
    rowFlagCellRenderer,
    {
      field: "tuesdayEntry",
      headerName: "سه شنبه (ورود)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "tuesdayExit",
      headerName: "سه شنبه (خروج)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "wednesdayEntry",
      headerName: "چهارشنبه (ورود)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "wednesdayExit",
      headerName: "چهارشنبه (خروج)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "thursdayEntry",
      headerName: "پنجشنبه (ورود)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "thursdayExit",
      headerName: "پنجشنبه (خروج)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "fridayEntry",
      headerName: "جمعه (ورود)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
    {
      field: "fridayExit",
      headerName: "جمعه (خروج)",
      cellEditor: CustomCellEditor,
      cellRenderer: CustomCellRenderer,
      cellStyle: CellStyle,
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      resizable: true,
      suppressMovable: true,
      editable: true,
    }),
    []
  );

  const containerStyle = useMemo(
    () => ({ width: "100%", height: "200px" }),
    []
  );
  const gridStyle = useMemo(
    () => ({ height: "200px", width: "100%", fontFamily: "inherit" }),
    []
  );

  return (
    <>
      <Accordion elevation={0} sx={{ border: 1, borderColor: "grey.200" }}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              آرایشگر
            </Typography>

            <IconButton
              color="success"
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                setModalOpen(true);
              }}
            >
              <Add />
            </IconButton>
          </Box>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "90%",
            overflowY: "auto",
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
              افزودن آرایشگر
            </Typography>

            <Box sx={{ cursor: "pointer" }} onClick={() => setModalOpen(false)}>
              <Close />
            </Box>
          </Box>

          <Divider />

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={4}>
              <TextField label={"نام مغازه"} size="small" fullWidth />
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={commission}
                    onChange={(event) => setCommission(event.target.checked)}
                  />
                }
                label="آیا درصد سودی برای خود بر می دارید؟"
              />
            </Grid>
            <Grid item xs={8}>
              {commission && (
                <TextField label={"میزان پورسانت (%)"} size="small" fullWidth />
              )}
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={deposit}
                    onChange={(event) => setDeposit(event.target.checked)}
                  />
                }
                label="برای رزرو بیعانه می گیرد؟"
              />
            </Grid>
            <Grid item xs={8}>
              {deposit && (
                <TextField
                  label={"هزینه بیعانه (تومان)"}
                  size="small"
                  fullWidth
                />
              )}
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rent}
                    onChange={(event) => setRent(event.target.checked)}
                  />
                }
                label="آیا برای صندلی اجاره می دهد؟"
              />
            </Grid>
            <Grid item xs={8}>
              {rent && (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label={"هزینه اجاره (تومان)"}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterJalali}>
                      <DatePicker
                        inputFormat="yyyy/MM/dd"
                        label="تاریخ یادآوری اجاره"
                        onChange={(newValue) => setRentDate(newValue!)}
                        value={rentDate}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth size="small" />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={vip}
                    onChange={(event) => setVip(event.target.checked)}
                  />
                }
                label="آیا آرایش VIP هم دارید؟"
              />
            </Grid>
            <Grid item xs={8}>
              {vip && (
                <>
                  <TextField
                    label={"هزینه VIP (تومان)"}
                    size="small"
                    fullWidth
                  />
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    چه خدماتی را ارایه می دهید؟
                  </Typography>

                  <TextField
                    label={"توضیحات"}
                    size="small"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </>
              )}
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={crypto}
                    onChange={(event) => setCrypto(event.target.checked)}
                  />
                }
                label="آیا ارز دیجیتال به عنوان پرداخت استفاده می کنید؟"
              />
            </Grid>
            <Grid item xs={8}>
              {crypto && (
                <>
                  <FormControl fullWidth>
                    <InputLabel>نوع ارز</InputLabel>
                    <Select
                      value={cryptoName}
                      label="نوع ارز"
                      onChange={(event) => setCryptoName(event.target.value)}
                      size="small"
                    >
                      <MenuItem value={"متن آزمایشی"}>متن آزمایشی</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label={"مقدار ارز"}
                    size="small"
                    fullWidth
                    sx={{ mt: 1 }}
                  />

                  <TextField
                    label={"آدرس کیف پول"}
                    size="small"
                    fullWidth
                    sx={{ mt: 1 }}
                  />
                </>
              )}
            </Grid>

            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
              <Button size="small" variant="contained" color="success">
                ذخیره
              </Button>
            </Grid>

            <Grid item xs={12} mt={4}>
              <div style={containerStyle}>
                <div className="ag-theme-alpine" style={gridStyle}>
                  <AgGridReact
                    onRowEditingStopped={(event) => console.log(event)}
                    editType={"fullRow"}
                    enableRtl={true}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowHeight={50}
                  ></AgGridReact>
                </div>
                <div
                  className="ag-theme-alpine"
                  style={{
                    ...gridStyle,
                    marginTop: "30px",
                    marginBottom: "40px",
                  }}
                >
                  <AgGridReact
                    onRowEditingStopped={(event) => console.log(event)}
                    editType={"fullRow"}
                    enableRtl={true}
                    rowData={rowData}
                    columnDefs={anotherColumnDefs}
                    defaultColDef={defaultColDef}
                    rowHeight={50}
                  ></AgGridReact>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default FacilityList;
