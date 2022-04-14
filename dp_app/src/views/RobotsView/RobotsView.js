import { CircularProgress, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import RobotCard from "../../components/RobotCard/RobotCard";
import { getRobotsThunk } from "../../thunks/robotsThunks";
import { robotsViewStyles } from "./styles";

const RobotsView = ({ classes, robots, getRobots, fetching }) => {
  useEffect(() => {
    getRobots();
  }, []);

  if (fetching) {
    return (
      <Box
        display="flex"
        height="calc(100% - 48px)"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        paddingBottom={40}
      >
        <CircularProgress size={60} />
        <br />
        <br />
        <Typography variant="h6">Loading</Typography>
      </Box>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {robots.map((r) => (
          <Grid key={r.id} item xs={12} sm={6} md={4} lg={3}>
            <RobotCard id={r.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  robots: state.robots.robots,
  fetching: state.robots.fetchingRobots,
});

const mapDispatchToProps = (dispatch) => ({
  getRobots: () => dispatch(getRobotsThunk()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(robotsViewStyles)(RobotsView));
