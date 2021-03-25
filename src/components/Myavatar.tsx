import React from 'react'
import { makeStyles, Box, Avatar, Typography } from '@material-ui/core'

import ImageFile from '../static/avatar.jpg'

const useStyles = makeStyles((theme) => ({
  myAvatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}))

const MyAvatar: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Avatar
            alt="Takumi Ikeda"
            src={ImageFile}
            className={classes.myAvatar}
          />
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5" color="initial">
            Takumi Ikeda
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1" color="initial">
            Web and Software Developer
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default MyAvatar
