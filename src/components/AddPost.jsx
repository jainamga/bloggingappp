import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label ,Select} from 'reactstrap';
import { getCurretUserDetail } from '../auth';
import axios from 'axios';
import authHeader from '../services/auth-header';
import Base from './Base';
import JoditEditor from 'jodit-react';

const AddPost=()=> {
  const [response, setResponse] = useState(null);
  const [userId, setuserId] = useState(null);
const [post,setPost] = useState({
    title:"newwwwwwwww",
    content:"newwwwwwwwww",
    

})

const editor = useRef(null);
const [content, setContent] = useState('');

const [categoryId, setCategoryId] = useState(''); // Separate variable for categoryId


const [postt,setPostt]=useState({

title:'',
content:'',

})

const API_URL2 = 'https://login2-production.up.railway.app/api/user/${userId}/category/1/posts';

const API_URL3 = 'https://login2-production.up.railway.app/api/con/';

  useEffect(() => {
    axios.get(API_URL3 , { headers: authHeader() })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      const user = JSON.parse(localStorage.getItem('user'));
      setuserId(user.id);  
  }, []);
//const[token,setToken]=useState(undefined)

const[user,setUser]=useState(undefined)
useEffect(()=>{
    setUser(getCurretUserDetail());
    console.log(user);
    
    console.log(JSON.parse(localStorage.getItem("accessToken")));
})

const createPost = (event) =>{
    event.preventDefault();
    console.log(post);
    
    axios.post(`https://login2-production.up.railway.app/api/user/${userId}/category/${categoryId}/posts`,post , { headers: authHeader() })
    .then((res) => {
      setResponse(res.data);
      console.log(res.data);
      window.location.reload();

    })
    .catch((err) => {
      console.log(err);
    });
}
const fieldChanged=(event)=>{
  if (event.target.name === 'categoryId') {
    setCategoryId(event.target.value);
  } else {
    setPost({ ...post, [event.target.name]: event.target.value });
  }
  console.log(post)
  console.log(categoryId)
}

const contentFieldChange=(data)=>{
  setPost({...post,'content':data})
  console.log(post);
}

    



  return (
    
    <div >
      <Base/>
      <div className='wrapper'>
        <Card className='ms-5 shadow-sm border-0 mt-2'>
            <CardBody>
            <h3>What's happening</h3>
            <Form>
                <div className='my-3'>
                    <Label for="title">
Post Title
                    </Label>
                    <Input type = "text" id="title" name='title' placeholder='Enter title' onChange={fieldChanged}>
                    
                    </Input>  
                </div>
                <div className='my-3'>
                    <Label for="content">
Post Content
                    </Label> 
                    <JoditEditor
			ref={editor}
			value={post.content}
      id="content" 
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={contentFieldChange}
		/>
                    {/* <Input style={{height:'150px'}} type = "textarea" id="content" placeholder='Enter here' name='content' onChange={fieldChanged}>
                    
                    </Input>    */}
                </div>
                <div className="mb-3">
              <Label for="categoryId">Post Category</Label>
              <Input
                type="select"
                id="categoryId"
                name="categoryId"
                onChange={fieldChanged}
                value={categoryId}
              >
                <option value="">Select a Category</option>
  {response &&
    response.map((category) => (
      <option
        key={category.categoryId}
        value={category.categoryId}
      >
        {category.cateogoryTitle} {/* Fix the typo here */}
      </option>
                ))}
              </Input>
            </div>
            <div className="mb-3">
                <Label for="categoryId">Post Category</Label>
                <div>
                  {response  && response.map((category) => (
                    <div key={category.categoryId}>
                      <input
                        type="radio"
                        id={`category-${category.categoryId}`}
                        name="categoryId"
                        value={category.categoryId}
                        onChange={fieldChanged}
                        checked={categoryId === category.categoryId}
                      />
                      <label htmlFor={`category-${category.categoryId}`}>
                        {category.cateogoryTitle}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
                <Container className="text-center">
              <Button color="primary" onClick={createPost}>
                Create Post
              </Button>
            </Container>
            </Form>
            </CardBody>
            
        </Card>
        {content}
        </div>
        </div>

  )
}

export default AddPost;