import { Button, Avatar } from "@mui/material";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import Link from "next/link";

function Products() {
  const [rowData] = useState([
    {
      productImage: "آواتار",
      productName: "متن آزمایشی",
      vendorName: "متن آزمایشی",
      productPrice: 35000,
    },
  ]);

  const CellStyle = useMemo(() => {
    return {
      display: "flex",
      alignItems: "center",
    };
  }, []);

  const [columnDefs] = useState<ColDef[]>([
    {
      field: "productImage",
      headerName: "تصویر کالا",
      cellStyle: CellStyle,
      cellRenderer: (params: ICellRendererParams) => {
        return (
          <Avatar
            alt="Remy Sharp"
            src=""
            sx={{
              width: "100%",
              height: 80,
              borderRadius: ({ spacing }) => spacing(1),
            }}
          />
        );
      },
    },
    { field: "productName", headerName: "نام کالا", cellStyle: CellStyle },
    {
      field: "vendorName",
      headerName: "نام فروشنده",
      cellStyle: CellStyle,
      cellRenderer: (params: ICellRendererParams) => {
        return (
          <Link href={`/storePanel/vendor/${params?.value}`}>
            <a>{params?.value}</a>
          </Link>
        );
      },
    },
    { field: "productPrice", headerName: "قیمت کالا", cellStyle: CellStyle },
    {
      field: "buyButton",
      headerName: "",
      cellStyle: CellStyle,
      cellRenderer: (params: ICellRendererParams) => {
        return (
          <Button
            size="small"
            color="success"
            variant="outlined"
            sx={{ width: "100%" }}
          >
            خرید
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
    <div style={containerStyle}>
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          enableRtl={true}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowHeight={100}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default Products;
