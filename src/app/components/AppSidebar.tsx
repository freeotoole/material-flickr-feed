'use client'

import React from 'react'
import Camera from '@mui/icons-material/Camera'
import CameraAlt from '@mui/icons-material/CameraAlt'
import CameraRoll from '@mui/icons-material/CameraRoll'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Monochrome from '@mui/icons-material/MonochromePhotos'
import Pets from '@mui/icons-material/Pets'
import Photo from '@mui/icons-material/Photo'
import PhotoLibrary from '@mui/icons-material/PhotoLibrary'
import Traffic from '@mui/icons-material/Traffic'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'

const albumList = [
  { name: 'Simba', icon: 'Pets' },
  { name: 'Analogue', icon: 'CameraRoll' },
  { name: 'Street', icon: 'Traffic' },
  { name: 'Black and White', icon: 'Monochrome' },
  { name: 'Challenges', icon: 'EmojiEvents' },
]

const iconMap: {
  [icon: string]: JSX.Element
} = {
  Pets: <Pets />,
  CameraRoll: <CameraRoll />,
  Traffic: <Traffic />,
  Monochrome: <Monochrome />,
  EmojiEvents: <EmojiEventsIcon />,
  default: <CameraAlt />,
}

export default function AppSidebar({ drawerWidth }: { drawerWidth: number }) {
  const [openAlbumDrawer, setOpenAlbumDrawer] = React.useState(false)

  const toggleAlbumDrawer = (newOpen: boolean) => () => {
    setOpenAlbumDrawer(newOpen)
  }
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ gap: '.5rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <Camera color="primary" />
          <Typography
            variant="h6"
            color={'primary'}
            noWrap
            component={NextLink}
            href="/"
            sx={{ textDecoration: 'none' }}
            onClick={() => setOpenAlbumDrawer(false)}
          >
            FLICKR FEED
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={NextLink}
              href="/"
              onClick={() => setOpenAlbumDrawer(false)}
            >
              <ListItemIcon>
                <Photo />
              </ListItemIcon>
              <ListItemText primary="Latest" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={openAlbumDrawer}
              onClick={() => setOpenAlbumDrawer(!openAlbumDrawer)}
            >
              <ListItemIcon>
                <PhotoLibrary />
              </ListItemIcon>
              <ListItemText primary="Albums" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: (theme) => theme.zIndex.drawer - 1,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            left: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={openAlbumDrawer}
        onClose={toggleAlbumDrawer(false)}
      >
        <List>
          <Toolbar />
          {albumList.map((album, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={NextLink}
                href={`/albums/${album.name.toLowerCase().replaceAll(' ', '-')}`}
                onClick={() => setOpenAlbumDrawer(false)}
              >
                <ListItemIcon>
                  <ListItemIcon>
                    {iconMap[album.icon] || iconMap.default}
                  </ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={album.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box p={2} marginTop={'auto'}>
          <Divider />
          <Typography
            marginTop={2}
            paragraph
            fontWeight={'bold'}
            color={'GrayText'}
          >
            Note: I would never use this style of flyout menu for such a simple
            navigation! I just wanted to see how to achieve it in MUI.
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}
