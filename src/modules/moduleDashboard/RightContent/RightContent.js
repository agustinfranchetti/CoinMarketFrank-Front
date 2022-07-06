import React from "react";
import { Grid } from "@mui/material";
import { PortfolioGraph } from "./PortfolioGraph";
import { PortfolioTable } from "./PortfolioTable";

export const RightContent = ({ drawerWidth, currencyList }) => {
  const tableWidth = 750;
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginTop="25px"
      spacing="20px"
    >
      <Grid item>
        <PortfolioGraph drawerWidth={drawerWidth} tableWidth={tableWidth} />
      </Grid>
      <Grid item>
        <PortfolioTable
          drawerWidth={drawerWidth}
          tableWidth={tableWidth}
          currencyList={currencyList}
        />
      </Grid>
    </Grid>
  );
};
