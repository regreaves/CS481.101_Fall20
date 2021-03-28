import React from "react";

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

import styles from "../util/Stylesheet";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { RegisterRoutes } from "../util/RouteBuilder";

function Homepage(props) {
  const Styles = styles();

  return (
    <div className={Styles.root}>
      <Navigation TopbarMessage="York College of Pennsylvania Simulation Tool" Styles={Styles} />
      <main className={Styles.content}>
        <div className={Styles.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className={Styles.card}>
              <CardContent>
                <Typography className={Styles.title} variant="h2">
                  Simulation Factory
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Create your simulation" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Run your simulation real-time or asyncronous" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Get analytics and feedback from participants" />
                  </ListItem>
                  <ListItem >
                    <CardActions>
                    <Link to="/factory" className={Styles.noDecoration}>
                      <Button color="primary" variant="contained" size="medium">
                        Create Simulation
                      </Button>
                    </Link>
                    </CardActions> 
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={Styles.card}>
              <CardContent>
                <Typography className={Styles.title} variant="h2">
                  Join Simulation
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Participate in Simulation" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Join with partner or run by yourself" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Contribute to research studies" />
                  </ListItem>
                  <ListItem>
                    <CardActions>
                      <Link to="/player" className={Styles.noDecoration}>
                        <Button variant="contained" color="primary" size="medium">
                          Join Simulation
                        </Button>
                      </Link>
                    </CardActions>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

RegisterRoutes(Homepage, "/", "/home", "/Home", "/Homepage", "/homepage", "/HomePage", "/homePage");
export default Homepage;