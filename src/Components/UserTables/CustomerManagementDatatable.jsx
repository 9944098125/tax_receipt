import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns } from "../../DatatableSource";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import EditCustomerModal from "../EditModals/EditCustomerModal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function createData(
  receiptNo,
  date,
  customerName,
  email,
  mobileNo,
  payment,
  amount,
  status,
  action
) {
  return {
    receiptNo,
    date,
    customerName,
    email,
    mobileNo,
    payment,
    amount,
    status,
  };
}

export default function CustomerTable() {
  const rows = [
    createData(
      "123675",
      "23/03/21",
      "Sravan",
      "tekis@org.com",
      "934534534533",
      "online",
      "35000",
      "PDF is generated"
    ),
    createData(
      "3675",
      "23/03/21",
      "Varma",
      "tekis@org.com",
      "934534534533",
      "cash",
      "35000",
      "PDF is generated"
    ),
    createData(
      "365",
      "23/03/21",
      "Vamsi",
      "tekis@org.com",
      "934534534533",
      "cash",
      "35000",
      "PDF is generated"
    ),
    createData(
      "12375",
      "23/03/21",
      "Raghav",
      "tekis@org.com",
      "934534534533",
      "online",
      "35000",
      "PDF is generated"
    ),
  ];

  const [data, setData] = React.useState(rows);

  //   const deleteRow = (id) => {
  //     setData(data.filter((row) => row.receiptNo !== id));
  //   };

  const oldData = {
    receiptNo: "",
    date: "",
    customerName: "",
    email: "",
    mobileNo: "",
    payment: "",
    amount: "",
    status: "",
  };

  const [show, setShow] = React.useState(false);

  const [showEditor, setShowEditor] = React.useState({
    id: "",
    boolean: false,
    dataWithId: { ...oldData },
  });

  const updateRow = (row) => {
    setShowEditor({
      id: row.clientId,
      boolean: !showEditor.boolean,
      dataWithId: { ...row },
    });
    console.log("row", row);
  };

  const showModal = (row) => {
    setShow(true);
    updateRow(row);
  };

  const closeModal = () => {
    setShow(false);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <RemoveRedEyeIcon sx={{ color: "primary.main" }} />
            <ModeEditOutlineIcon
              onClick={() => showModal(params.row)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
        );
      },
    },
  ];

  return (
    <Fragment>
      <div
        style={{
          height: 400,
          width: "100%",
          color: "black",
        }}
      >
        <DataGrid
          style={{ color: "#00254d" }}
          rows={data}
          columns={customerColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={(row) => row.receiptNo}
        />
      </div>
      {show && (
        <EditCustomerModal
          show={show}
          close={closeModal}
          showEditor={showEditor}
          title="Edit Customer"
        />
      )}
    </Fragment>
  );
}
