import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { makeGetRobotByIdSelector } from "../../selectors/robotSelectors";

const RobotCard = ({ id }) => {
  const getRobotByIdSelector = useCallback(makeGetRobotByIdSelector(), []);

  const robot = useSelector((state) => getRobotByIdSelector(state, id));

  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: blue[500] }}>{robot.name[0]}</Avatar>}
        title={robot.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://robohash.org/${robot.id}`}
      />
      <CardContent>
        <List>
          <ListItem>
            <Typography variant="caption">
              <b>Email:</b> {robot.email}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              <b>Company: </b>
              {robot.company.name}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              <b>Website: </b>
            </Typography>
            <Link href={"//" + robot.website}>{robot.website}</Link>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default RobotCard;
