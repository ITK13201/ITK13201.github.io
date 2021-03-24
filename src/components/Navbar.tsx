import React from 'react'
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
  Menu,
  MenuItem,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import MediaQuery from 'react-responsive'

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navbarTitle: {
    padding: '10px',
  },
}))

const SpNavbarList: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="#about" color="inherit" underline="none">
            ABOUT
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="#skills" color="inherit" underline="none">
            SKILLS
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="#works" color="inherit" underline="none">
            WORKS
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="#contact" color="inherit" underline="none">
            CONTACT
          </Link>
        </MenuItem>
      </Menu>
    </>
  )
}

const PcNavbarList: React.FC = () => {
  return (
    <>
      <List>
        <Button href="#about">ABOUT</Button>
        <Button href="#skills">SKILLS</Button>
        <Button href="#works">WORKS</Button>
        <Button href="#contact">CONTACT</Button>
      </List>
    </>
  )
}

const Navbar: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar color="default" position="static">
        <Toolbar>
          <Container maxWidth="md" className={classes.navbar}>
            <Box>
              <Typography
                variant="h5"
                color="initial"
                className={classes.navbarTitle}
              >
                <Link href="/" color="inherit" underline="none">
                  Portfolio
                </Link>
              </Typography>
            </Box>
            <MediaQuery query="(max-width: 767px)">
              <SpNavbarList />
            </MediaQuery>
            <MediaQuery query="(min-width: 767px)">
              <PcNavbarList />
            </MediaQuery>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
