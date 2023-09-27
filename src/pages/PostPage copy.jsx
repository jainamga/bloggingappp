import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from "reactstrap";
import { toast } from 'react-toastify';
import { myAxios } from "../services/helper";
import { isLoggedIn } from "../auth";
import authHeader from "../services/auth-header";
import Base from '../components/Base';

const PostPage2 = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState({
    content: ''
  });

  const handleCommentChange = (event) => {
    setComment({ content: event.target.value });
  };

  const API_URL2 = `http://login2-production.up.railway.app/api/posts/${postId}`;
  const API_URL3 = `http://login2-production.up.railway.app/api/comments/post/${postId}/comments`;

  useEffect(() => {
    // load post of postId 
    myAxios.get(API_URL2, { headers: authHeader() }).then(data => {
      setPost(data);
    }).catch(error => {
      console.log(error);
      toast.error("Error in loading post");
    });
  }, []);

  const submitComment = () => {
    // Load post of postId
    myAxios.post(API_URL3, comment, { headers: authHeader() }).then(data => {
      setPost(data);
      window.location.reload();
    }).catch(error => {
      console.log(error);
      toast.error("Error in posting comment");
    });
  };

  const printDate = (numbers) => {
    return new Date(numbers).toLocaleDateString();
  };

  const submitPost = () => {
    if (!isLoggedIn()) {
      toast.error("Need to login first !!");
      return;
    }

    if (comment.content.trim() === '') {
      return;
    }
  };

  return (
    <div>
        <Base/>
      <Container className="mt-4">
      <h1>{post ? post.data.title : "Loading..."}</h1>
      <Link to='/'>Home</Link>
      <Row>
        <Col md={{ size: 12 }}>
          <Card className="mt-3">
            <CardBody>
              <CardText className="mb-2">
                Posted By <b>{post ? post.data.user.username : "Loading..."}</b> on <b>{post ? post.data.dateAdded : "Loading..."}</b>
              </CardText>
              <CardText className="mb-2 text-muted">{post ? post.data.category.cateogoryTitle : "Loading..."}</CardText>
              <CardText>
                <h3>{post ? post.data.title : "Loading..."}</h3>
              </CardText>
              <div className="image-container">
                <img className="img-fluid"   style={{ maxWidth: '100%', maxHeight: '200px' }} // Adjust the maxWidth and maxHeight as needed
 src={'http://localhost:8087/api/post/image/ff.jpeg'} alt="Post Image" />
                <CardText className="mt-3" dangerouslySetInnerHTML={{ __html: post ? post.data.content : "Loading..." }}></CardText>
              </div>
            </CardBody>
          </Card>
          <h1>Load the post from the database</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ size: 9, offset: 1 }}>
          <h3>Comments</h3>
          {post && post.data.comments.map((c) => (
            <Card className="mt-2" key={c.id}>
              <CardBody>
                <CardText>{c.content}</CardText>
              </CardBody>
            </Card>
          ))}
          <Card className="mt-2">
            <CardBody>
              <Input
                onChange={handleCommentChange}
                value={comment.content}
                type="textarea"
                placeholder="Enter comment here"
              />
              <Button onClick={submitComment} className="mt-2" color="primary">Comment</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default PostPage2;
