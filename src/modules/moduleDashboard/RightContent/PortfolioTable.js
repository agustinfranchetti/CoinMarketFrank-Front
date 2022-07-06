import React from "react";
import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const PortfolioTable = ({ drawerWidth, tableWidth, currencyList }) => {
  const columns = [
    { id: "number", label: "number", minWidth: 100 },
    { id: "name", label: "name", minWidth: 100 },
    {
      id: "price",
      label: "price",
      minWidth: 100,
      align: "right",
    },
    {
      id: "marketCap",
      label: "marketCap",
      minWidth: 100,
      align: "right",
    },
    {
      id: "ammount",
      label: "ammount",
      minWidth: 100,
      align: "right",
    },
  ];

  function createData(number, name, price, marketCap, ammount) {
    return { number, name, price, marketCap, ammount };
  }

  let rows = [];

currencyList.map((currency) => {
  rows.push(
    createData(
      currency.name,
      currency.symbol,
      currency.price,
      currency.marketCap,
      currency.ammount
    )
  );
});

  return (
    <Paper sx={{ width: tableWidth, overflow: "hidden" }} elevation={0}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.number}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
