import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  List,
  makeStyles,
  Box,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navbarTitle: {
    padding: "10px",
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="default" position="static">
        <Toolbar>
          <Container maxWidth="md" className={classes.navbar}>
            <Box>
              <Typography
                variant="h5"
                color="initial"
                className={classes.navbarTitle}
              >
                <Link href="/" color="inherit">
                  Portfolio
                </Link>
              </Typography>
            </Box>
            <List>
              <Button href="#about">ABOUT</Button>
              <Button href="#skills">SKILLS</Button>
              <Button href="#works">WORKS</Button>
              <Button href="#contact">CONTACT</Button>
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
