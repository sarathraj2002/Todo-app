import React from 'react'
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
import './Home.css'
const Home = () => {
     const[todos,setTodos]=usestate([]);
     useEffect(()=>{
            
        axiosInstance.get('http://localhost:3000/todo/todo').then((res)=>{
            setTodos(res.data)
        
        })
     },[])

    

      let deleteTodo=(p)=>{
      
      axiosInstance.delete('http://localhost:3000/todo/delete/'+p).then((res)=>{
        alert ('deleted');
       window.location.reload();
  
   })
}

  return (
    
    <div className='todo'>
        <h1>TODO LIST</h1>
        <p>A to-do list is a list of tasks that need to be completed, usually organized by priority. To-do lists can be used to manage personal and professional tasks, such as household chores, work assignments, or team check-ins.</p>
    
        import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  
 
      {/* <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="" />
      </InputGroup>  */}
      
    </div>
    
  )
}

export default Home