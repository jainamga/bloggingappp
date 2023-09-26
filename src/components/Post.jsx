import React from 'react'
import { Button, Card, CardBody, CardText } from 'reactstrap';

function Post({post={title:'dsa',content:'dsa'}}) {

  return (
    <Card>
        <CardBody>
            <h1>{post.title}</h1>
            <CardText>
                <p>{post.content}</p>
            </CardText>
            <div>
                <Button>Read More</Button>
            </div>
        </CardBody>
    </Card>
  )
}

export default Post;