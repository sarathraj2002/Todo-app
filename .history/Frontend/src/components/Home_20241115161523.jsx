import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './Home.css'
const Home = () => {
     const[todo,setTodos]=usestate([]);
     useEffect(()=>{
            
        axiosInstance.get('http://localhost:3000/todo/todo').then((res)=>{
            settodo(res.data)
        
        })
     },[])

    

      let deletetodo=(p)=>{
      
      axiosInstance.delete('http://localhost:3000/todo/delete/'+p).then((res)=>{
        alert ('deleted');
       window.location.reload();
  
   })
}

  return (
    <>
    <div className='todo'>
        <h2>TODO LIST</h2>
        <p>A to-do list is a list of tasks that need to be completed, usually organized by priority. To-do lists can be used to manage personal and professional tasks, such as household chores, work assignments, or team check-ins.</p>
    
        
 
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="" />
      </InputGroup> 
      
    </div>
    </>
  )
}

export default Home