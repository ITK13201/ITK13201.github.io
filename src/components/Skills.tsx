import React from 'react'
import {
  Box,
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',
  },
})

const Skills: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Skills</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6">Language</Typography>
            <Typography color="textSecondary">
              Python / Java / Typescript / Javascript / C
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6">Framework</Typography>
            <Typography color="textSecondary">Django / React</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6">Database</Typography>
            <Typography color="textSecondary">MySQL / PostreSQL</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Skills
