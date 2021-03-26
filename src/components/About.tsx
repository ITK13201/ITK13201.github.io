import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  aboutTable: {
    border: 'none',
  },
}))

const BelongTo: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <table className={classes.aboutTable}>
        <tbody className={classes.aboutTable}>
          <tr className={classes.aboutTable}>
            <td className={classes.aboutTable}>University:</td>
            <td className={classes.aboutTable}>Waseda University</td>
          </tr>
          <tr className={classes.aboutTable}>
            <td className={classes.aboutTable}>School:</td>
            <td className={classes.aboutTable}>
              Fundamental Science and Engineering
            </td>
          </tr>
          <tr className={classes.aboutTable}>
            <td className={classes.aboutTable}>Department:</td>
            <td className={classes.aboutTable}>
              Computer Science and Engineering
            </td>
          </tr>
          <tr className={classes.aboutTable}>
            <td className={classes.aboutTable}>Grade:</td>
            <td className={classes.aboutTable}>Bachelor #3</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Club: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <table className={classes.aboutTable}>
        <tbody className={classes.aboutTable}>
          <tr className={classes.aboutTable}>
            <td className={classes.aboutTable}>Name:</td>
            <td className={classes.aboutTable}>MIS.W</td>
          </tr>
          <tr className={classes.aboutTable}>
            <td className={classes.aboutTable}>What's it?:</td>
            <td className={classes.aboutTable}>digital creation club</td>
          </tr>
          <tr className={classes.aboutTable}>
            <td className={classes.aboutTable}>Sciety:</td>
            <td className={classes.aboutTable}>Programming</td>
          </tr>
          <tr className={classes.aboutTable}>
            <td className={classes.aboutTable}>Home Page:</td>
            <td className={classes.aboutTable}>
              <a
                href="https://misw.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://misw.jp/
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const About: React.FC = () => {
  return (
    <>
      <Box p={1}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5" color="initial">
            About
          </Typography>
        </Box>
        <Box p={1}>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h6" color="initial">
              Belonging To
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="body1" align="left" color="initial">
              <BelongTo />
            </Typography>
          </Box>
        </Box>
        <Box p={1}>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h6" color="initial">
              Club
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="body1" align="left" color="initial">
              <Club />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default About
