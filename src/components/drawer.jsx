import React from 'react'
import PropTypes from 'prop-types'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

const drawerItems = ['Our Story', 'Itinerary', 'Location']

const DrawerMenu = ({ open, drawerWidth, handleDrawerClose }) => {
  const theme = useTheme()

  return (
    <>
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((text, index) => (
            <a
              key={index}
              href={text === 'Our Story' ? '#ourstory' : `#${text}`}
            >
              <ListItem button key={text} component="button">
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
    </>
  )
}

DrawerMenu.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func.isRequired,
  drawerWidth: PropTypes.number
}

export default DrawerMenu
