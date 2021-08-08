import React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
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
  navbarLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

const SpNavbarList: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()

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
          <AnchorLink href="#about" className={classes.navbarLink}>
            ABOUT
          </AnchorLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AnchorLink href="#skills" className={classes.navbarLink}>
            SKILLS
          </AnchorLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AnchorLink href="#works" className={classes.navbarLink}>
            WORKS
          </AnchorLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AnchorLink href="#contact" className={classes.navbarLink}>
            CONTACT
          </AnchorLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            href="https://itk13201.hatenablog.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navbarLink}
            underline="none"
          >
            BLOG
          </Link>
        </MenuItem>
      </Menu>
    </>
  )
}

const PcNavbarList: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <List>
        <AnchorLink href="#about" className={classes.navbarLink}>
          <Button>ABOUT</Button>
        </AnchorLink>
        <AnchorLink href="#skills" className={classes.navbarLink}>
          <Button>SKILLS</Button>
        </AnchorLink>
        <AnchorLink href="#works" className={classes.navbarLink}>
          <Button>WORKS</Button>
        </AnchorLink>
        <AnchorLink href="#contact" className={classes.navbarLink}>
          <Button>CONTACT</Button>
        </AnchorLink>
        <Button
          href="https://itk13201.hatenablog.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BLOG
        </Button>
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
