import React from "react";
import styles from "./Cards.module.css";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CounterUp from "react-countup";

import cx from "classnames";

function Cards(props) {
  const {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  } = props.formPosts.singleData;
  console.log(confirmed);

  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CounterUp
                separator=","
                start={0}
                end={confirmed.value}
                duration={1.6}
              ></CounterUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        {/* sECOND oNE*/}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.recovered, styles.card)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>
            <Typography variant="h5">
              <CounterUp
                separator=","
                start={0}
                end={recovered.value}
                duration={1.6}
              ></CounterUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoverd cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        {/* Third oNE*/}

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.deaths, styles.card)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CounterUp
                separator=","
                start={0}
                end={deaths.value}
                duration={1.6}
              ></CounterUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>{" "}
            <Typography variant="body2">
              Number of deaths of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
