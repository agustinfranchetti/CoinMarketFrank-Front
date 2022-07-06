import React from "react";

import { Grid } from "@mui/material";
import { RightContent } from "./RightContent/RightContent";

export const Dashboard = () => {
  const drawerWidth = "240px";
  const [currencyList, setCurrencyList] = React.useState([]);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/currencies/")
      .then((res) => res.json())
      .then((data) => {
        setCurrencyList(data);
        console.log(data);
      });
  }, []);

  return (
    currencyList.length > 0 && (
      <Grid container direction="row" rowSpacing="20px" justifyContent="center">
        <Grid item>
          <RightContent drawerWidth={drawerWidth} currencyList={currencyList} />
        </Grid>
      </Grid>
    )
  );
};
