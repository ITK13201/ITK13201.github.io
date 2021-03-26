import React from 'react'
import { Box, Typography, makeStyles, Link, Avatar } from '@material-ui/core'
import { green, blue, purple } from '@material-ui/core/colors'
import {
  Mail as MailIcon,
  Twitter as TwitterIcon,
  GitHub as GithubIcon,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
}))

const Contact: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5" color="initial">
            Contact
          </Typography>
        </Box>
        <Box
          className={classes.root}
          display="flex"
          justifyContent="center"
          p={1}
        >
          <Link
            href="mailto:tkik2236@gmail.com?subject=Hello"
            color="inherit"
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className={classes.green}>
              <MailIcon />
            </Avatar>
          </Link>
          <Link
            href="https://twitter.com/itk13201"
            color="inherit"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className={classes.blue}>
              <TwitterIcon />
            </Avatar>
          </Link>
          <Link
            href="https://github.com/ITK13201"
            color="inherit"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className={classes.purple}>
              <GithubIcon />
            </Avatar>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Contact
