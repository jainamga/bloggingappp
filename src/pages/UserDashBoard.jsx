import React from 'react'
import Base from '../components/Base';
import AddPost from '../components/AddPost';
import { Container } from 'reactstrap';



const UserDashBoard=()=> {
  return (
    <div>
    <Base/> 
    <Container>
      <AddPost/>
    </Container>
     </div>
     
  )
}

export default UserDashBoard;