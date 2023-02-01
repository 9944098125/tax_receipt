import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { clientColumns } from "../../DatatableSource";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import EditClientModal from "../EditModals/EditClientModal";

function createData(
  clientId,
  clientName,
  organization,
  email,
  mobileNo,
  status,
  packages,
  startDate,
  expiryDate
) {
  return {
    clientId,
    clientName,
    organization,
    email,
    mobileNo,
    status,
    packages,
    startDate,
    expiryDate,
  };
}

export function PendingTable() {
  const pendingRows = [
    createData(
      "123675",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Pending",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "3675",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Pending",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "365",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Pending",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "12375",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Pending",
      35000,
      "12/05/22",
      "12/12/22"
    ),
  ];

  const [data, setData] = React.useState(pendingRows);

  const deleteRow = (id) => {
    setData(data.filter((row) => row.clientId !== id));
  };

  const oldData = {
    clientId: "",
    clientName: "",
    organization: "",
    email: "",
    mobileNo: "",
    status: "",
    packages: "",
    startDate: "",
    expiryDate: "",
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
            <ModeEditOutlineIcon
              onClick={() => showModal(params.row)}
              sx={{ cursor: "pointer" }}
            />
            <DeleteIcon
              onClick={() => deleteRow(params.row.clientId)}
              sx={{ color: "red", cursor: "pointer" }}
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
          columns={clientColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={(row) => row.clientId}
        />
      </div>
      {show && (
        <EditClientModal
          show={show}
          close={closeModal}
          showEditor={showEditor}
        />
      )}
    </Fragment>
  );
}

export function ActiveTable() {
  const activeRows = [
    createData(
      "12345",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Active",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "345",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Active",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "534345",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Active",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "98345",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Active",
      35000,
      "12/05/22",
      "12/12/22"
    ),
  ];
  const [data, setData] = React.useState(activeRows);

  const deleteRow = (id) => {
    setData(data.filter((row) => row.clientId !== id));
  };

  const [show, setShow] = React.useState(false);

  const oldData = {
    clientId: "",
    clientName: "",
    organization: "",
    email: "",
    mobileNo: "",
    status: "",
    packages: "",
    startDate: "",
    expiryDate: "",
  };

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
            <ModeEditOutlineIcon
              onClick={() => showModal(params.row)}
              sx={{ cursor: "pointer" }}
            />
            <DeleteIcon
              onClick={() => deleteRow(params.row.clientId)}
              sx={{ color: "red", cursor: "pointer" }}
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
          columns={clientColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={(row) => row.clientId}
        />
      </div>
      {show && (
        <EditClientModal
          show={show}
          close={closeModal}
          showEditor={showEditor}
        />
      )}
    </Fragment>
  );
}

export function InactiveTable() {
  const inactiveRows = [
    createData(
      "123",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Inactive",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "1234",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Inactive",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "1323",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Inactive",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "1253",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Inactive",
      35000,
      "12/05/22",
      "12/12/22"
    ),
    createData(
      "1236",
      "Abhik",
      "Teknotrait",
      "tekis@org.com",
      934534534533,
      "Inactive",
      35000,
      "12/05/22",
      "12/12/22"
    ),
  ];
  const [data, setData] = React.useState(inactiveRows);

  const deleteRow = (id) => {
    setData(data.filter((row) => row.clientId !== id));
  };

  const [show, setShow] = React.useState(false);

  const oldData = {
    clientId: "",
    clientName: "",
    organization: "",
    email: "",
    mobileNo: "",
    status: "",
    packages: "",
    startDate: "",
    expiryDate: "",
  };

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
            <ModeEditOutlineIcon
              onClick={() => showModal(params.row)}
              sx={{ cursor: "pointer" }}
            />
            <DeleteIcon
              onClick={() => deleteRow(params.row.clientId)}
              sx={{ color: "red", cursor: "pointer" }}
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
          columns={clientColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={(row) => row.clientId}
        />
      </div>
      {show && (
        <EditClientModal
          show={show}
          close={closeModal}
          showEditor={showEditor}
        />
      )}
    </Fragment>
  );
}
