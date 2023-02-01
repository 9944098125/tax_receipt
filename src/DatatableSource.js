import { Typography } from "@mui/material";

export const clientColumns = [
  { field: "clientId", headerName: "Client ID", width: 80 },
  {
    field: "clientName",
    headerName: "Client Name",
    width: 100,
  },
  {
    field: "organization",
    headerName: "Organization",
    width: 120,
  },

  {
    field: "email",
    headerName: "Email Address",
    width: 170,
  },
  {
    field: "mobileNo",
    headerName: "Mobile Number",
    width: 120,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return params.row.status === "Active" ? (
        <Typography
          sx={{
            p: "5px",
            borderRadius: "5px",
            backgroundColor: "#cce5ff",
            color: "#007bff",
          }}
        >
          {params.row.status}
        </Typography>
      ) : params.row.status === "Inactive" ? (
        <Typography
          sx={{
            p: "5px",
            borderRadius: "5px",
            backgroundColor: "#fff4d3",
            color: "#fcb000",
          }}
        >
          {params.row.status}
        </Typography>
      ) : (
        params.row.status === "Pending" && (
          <Typography
            sx={{
              p: "5px",
              borderRadius: "5px",
              backgroundColor: "#fae3e5",
              color: "#e4606d",
            }}
          >
            {params.row.status}
          </Typography>
        )
      );
    },
  },
  {
    field: "packages",
    headerName: "Package",
    width: 70,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 80,
  },
  {
    field: "expiryDate",
    headerName: "End Date",
    width: 80,
  },
];

export const customerColumns = [
  { field: "receiptNo", headerName: "Receipt No", width: 20 },
  {
    field: "date",
    headerName: "Date",
    width: 80,
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    width: 120,
  },

  {
    field: "email",
    headerName: "Email Address",
    width: 170,
  },
  {
    field: "mobileNo",
    headerName: "Mobile Number",
    width: 120,
  },
  {
    field: "payment",
    headerName: "Payment",
    width: 100,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 80,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
];
