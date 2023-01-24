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
    width: 100,
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
            backgroundColor: "lightgreen",
            color: "darkgreen",
          }}
        >
          {params.row.status}
        </Typography>
      ) : params.row.status === "Inactive" ? (
        <Typography
          sx={{
            p: "5px",
            borderRadius: "5px",
            backgroundColor: "red",
            color: "goldenrod",
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
              backgroundColor: "yellow",
              color: "goldenrod",
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
