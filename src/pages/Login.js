import React, { useState } from 'react'
import { CardHeader, Container, Form,Row, FormGroup, Input, Label,Card,Col,FormText,Button } from 'reactstrap';
import Base from '../components/Base';
import axios from "axios";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

import { doLogin } from '../auth';
// import Cookies from 'react-cookie';


const Login = () => {
const navigate = useNavigate();
const [loginDetails,setLoginDetails] =useState({username:'',password:''})


const handleChange = (event,field)=>{
  let actualValue = event.target.value;
  


  setLoginDetails({
    ...loginDetails,
    [field]:actualValue
  })
}

const handleSubmit =(event)=>
{
  
  event.preventDefault();
  console.log(loginDetails);
  axios.post('http://localhost:8087/api/auth/signin',loginDetails).then((resp)=>{
  const cookies = resp.headers['Set-Cookie'];
  // const value = Cookies.get('bezkoder');
  // console.log(value);

  console.log(resp)
  console.log(resp.headers)
  console.log("success log")
  console.log(resp.data.accessToken)
  localStorage.setItem("data",JSON.stringify(resp.data));
  localStorage.setItem("accessToken",JSON.stringify(resp.data.accessToken));
  // axios.get('https://login-production-e2c3.up.railway.app/api/posts').then((resps)=>{
    // console.log(resps)})
  toast.success("User has signed up")
  // navigate("/user/dashboard")




  }).catch((console.error()));
  toast.error("dsa")

}

const consoleFire = ()=>
{
  axios.get('https://login-production-e2c3.up.railway.app/api/posts').then((resps)=>{
    console.log(resps)})

}

  return (
    <>    <Base/>
     <Container>
      <Row className='mt-4'>
        <Col sm={{size:6,offset:3}}>
      <Card color='primary'>
        <CardHeader>
          <h3>
            Login

          </h3>
        </CardHeader>
        <Form onSubmit={handleSubmit}>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input
        id="email"
        name="email"
        placeholder="with a placeholder"
        type="text"
        value={loginDetails.username}
        onChange={(e)=>handleChange(e,'username')}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="name"
      sm={2}
    >
      Enter name
    </Label>
    <Col sm={10}>
      <Input
        
        
        placeholder="Enter name"
        type="text"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="password"
      sm={2}
    >
      Password
    </Label>
    <Col sm={10}>
      <Input
        id="password"
        name="password"
        placeholder="Enter password"
        type="password"
        value={loginDetails.password}
        onChange={(e)=>handleChange(e,'password')}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleSelect"
      sm={2}
    >
      About
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelect"
        name="select"
        type="textarea"
        height={{height:"250px"}}
      >
       
      </Input>
    </Col>
  </FormGroup>
 
 
     
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 10
      }}
    >
    <Button color='dark'>
      Login
    </Button>
    
    <Button className='ms-2' color='secondary' onClick={consoleFire}>
      Reset
    </Button >
    </Col>
  </FormGroup>
</Form>
      </Card>
      </Col>
      </Row>
    </Container>
    </>

  )
}

export default Login;