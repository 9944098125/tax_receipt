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
      123,
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
      2342,
      "SomeOne",
      "Some company",
      "someCompany@gmail.com",
      2342342342,
      "Pending",
      45000,
      "15/12/21",
      "12/12/22"
    ),
    createData(
      1245,
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
      1834,
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
      2378,
      "SomeOne",
      "Some company",
      "someCompany@gmail.com",
      2342342342,
      "Pending",
      45000,
      "15/12/21",
      "12/12/22"
    ),
    createData(
      1205,
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
      1120,
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
      2560,
      "SomeOne",
      "Some company",
      "someCompany@gmail.com",
      2342342342,
      "Pending",
      45000,
      "15/12/21",
      "12/12/22"
    ),
    createData(
      1340,
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
      11206,
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
      242300,
      "SomeOne",
      "Some company",
      "someCompany@gmail.com",
      2342342342,
      "Pending",
      45000,
      "15/12/21",
      "12/12/22"
    ),
    createData(
      56732,
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
      134743,
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
      22342,
      "SomeOne",
      "Some company",
      "someCompany@gmail.com",
      2342342342,
      "Pending",
      45000,
      "15/12/21",
      "12/12/22"
    ),
    createData(
      23486,
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

  const [show, setShow] = React.useState(false);

  const showModal = () => {
    setShow(true);
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
              onClick={showModal}
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
      {show && <EditClientModal show={show} close={closeModal} />}
    </Fragment>
  );
}

export function ActiveTable() {
  const activeRows = [
    createData(
      123,
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
      2342,
      "SomeOne",
      "Some company",
      "someCompany@gmail.com",
      2342342342,
      "Active",
      45000,
      "15/12/21",
      "12/12/22"
    ),
    createData(
      1245,
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

  const showModal = () => {
    setShow(true);
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
              onClick={showModal}
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
      {show && <EditClientModal show={show} close={closeModal} />}
    </Fragment>
  );
}

export function InactiveTable() {
  const inactiveRows = [
    createData(
      123,
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
      2342,
      "SomeOne",
      "Some company",
      "someCompany@gmail.com",
      2342342342,
      "Inactive",
      45000,
      "15/12/21",
      "12/12/22"
    ),
    createData(
      1245,
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

  const showModal = () => {
    setShow(true);
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
              onClick={showModal}
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
      {show && <EditClientModal show={show} close={closeModal} />}
    </Fragment>
  );
}
