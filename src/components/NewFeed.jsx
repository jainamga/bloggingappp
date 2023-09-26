import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardText, Col, Container, Form, Input, Label, Row } from 'reactstrap';
import { getCurretUserDetail } from '../auth';
import axios from 'axios';
import authHeader from '../services/auth-header';
import Post from './Post';
import { Await, Link } from 'react-router-dom';


function NewFeed() {
    const [feed, setFeed] = useState(null);
    const[userId,setuserId] = useState(null);
    const[arrayLength,setarrayLength] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const API_URL2 = 'https://login2-production.up.railway.app/api/posts';

  useEffect(() => {
    console.log('0hello')
     axios.get(API_URL2 , { headers: authHeader() })
      .then((res) => {
        setFeed(res.data);
        console.log(res.data);
        setLoading(false);
        setarrayLength(res.data.length)
        console.log(arrayLength);
        console.log(feed);
      })
      .catch((err) => {
        console.log(err);
      });
      const user = JSON.parse(localStorage.getItem('user'));
      setuserId(user.id);
      console.log(feed);
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }



  return (
    
    <div className='container-fluid'>
        <Row>
          
            <Col md={{
                size:10,offset:1}}>
                </Col>
            <h1>Blog Count ({arrayLength})</h1>
            <Card>
        <CardBody>
            <h1>{feed.title}</h1>
            <CardText>
                <p>{feed.content}</p>
            </CardText>
            <div>
                <Link className='btn btn-secondary border-0' to="/post">Read More</Link>
            </div>
        </CardBody>
    </Card>
        </Row>

        
        NewFeed</div>
  )
}

export default NewFeed