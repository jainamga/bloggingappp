import React, { useEffect, useState } from 'react'
import Base from '../components/Base';
import { CardHeader, Container, Form,Row, FormGroup, Input, Label,Card,Col,FormText,Button } from 'reactstrap';
import { signUp } from '../services/user-service';
import axios from "axios";
import { toast } from 'react-toastify';
const Signup = () => {

  const [data,setData] = useState({
username:'f',
email:'',
password:'',
role:['mod','user']



  })

const  submitForm=(event)=>{
  event.preventDefault();
axios.post('https://login-production-e2c3.up.railway.app/api/auth/signup',data).then((resp)=>{
  console.log(resp.data.message)
  console.log("success log")
  toast.success("User has signed up")
  }).catch((console.error()));
  toast.error("dsa")
console.log(data);
  };

  useEffect(()=>{console.log(data)},[data])

  const handleChange=(event,property)=>{
    console.log("username changed");
    setData({...data,[property]:event.target.value})
    // setData({...data,[property]:event.target.value})

  }



  return (<><Base/>
    
    <Container>
      <Row>
        <Col sm={{size:6,offset:3}}>
      <Card>
        <CardHeader>
          <h3>
            Fill Information to Register

          </h3>
        </CardHeader>
        <Form onSubmit={submitForm}>
  <FormGroup row>
    <Label
      for="email"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input
        id="email"
        name="email"
        onChange={(e)=>handleChange(e,'email')}
        value={data.email}
        placeholder="with a placeholder"
        type="email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="username"
      sm={2}
    >
      Enter username
    </Label>
    <Col sm={10}>
      <Input
        id="username"
        onChange={(e)=>handleChange(e,'username')}
        placeholder="Enter username"
        type="text"
        value={data.username}
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
        onChange={(e)=>handleChange(e,'password')}
        value={data.password}
        type="password"
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
        // onChange={(e)=>handleChange(e,'about')}
        // value={data.about}
        height={{height:"250px"}}
      >
       
      </Input>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleSelectMulti"
      sm={2}
    >
      Select Multiple
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelectMulti"
        multiple
        name="selectMulti"
        type="select"
      >
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
        <option>
          4
        </option>
        <option>
          5
        </option>
      </Input>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleText"
      sm={2}
    >
      Text Area
    </Label>
    <Col sm={10}>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleFile"
      sm={2}
    >
      File
    </Label>
    <Col sm={10}>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
      </FormText>
    </Col>
  </FormGroup>
  <FormGroup
    row
    tag="fieldset"
  >
    <legend className="col-form-label col-sm-2">
      Radio Buttons
    </legend>
    <Col sm={10}>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option one is this and that—be sure to include why it‘s great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup
        check
        disabled
      >
        <Input
          disabled
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option three is disabled
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="checkbox2"
      sm={2}
    >
      Checkbox
    </Label>
    <Col
      sm={{
        size: 10
      }}
    >
      <FormGroup check>
        <Input
          id="checkbox2"
          type="checkbox"
        />
        {' '}
        <Label check>
          Check me out
        </Label>
      </FormGroup>
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
    <Button>
      Submit
    </Button>
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

export default Signup;