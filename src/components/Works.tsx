import React from 'react'
import {
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: '100%',
  },
}))

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />
}

const Works: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Works</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <List className={classes.root}>
            <ListItem>
              <ListItemLink
                href="https://misw-gamecenter.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="MISW Gamecenter"
                  secondary="We are developing a site for submitting works in a club with fellow students of club. "
                ></ListItemText>
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink
                href="https://github.com/ITK13201/private_diary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Private Diary"
                  secondary="I created a personal diary storage service using Django, Python web framework."
                ></ListItemText>
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink
                href="https://github.com/ITK13201/ControlPDF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="ControlPDF"
                  secondary="I created a tool in python to merge and split PDFs."
                ></ListItemText>
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink
                href="https://github.com/ITK13201/ITK13201.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Portfolio"
                  secondary="This is. It made by React & Typescript."
                ></ListItemText>
              </ListItemLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}

export default Works
