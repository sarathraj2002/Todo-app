import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Nav.css'

const Nav = () => {
  return (
    <div>
      

    <Box sx={{ flexGrow: 1 ,width:'300%',ri}}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 7 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO LIST
          </Typography>
          <Button color="inherit">ADD</Button>
        </Toolbar>
      </AppBar>
    </Box>
  
    </div>
  )
}

export default Nav