import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from "reactstrap"
import Base from "../components/Base"
import { toast } from 'react-toastify'
import { BASE_URL, myAxios } from "../services/helper"
import { isLoggedIn } from "../auth"
import authHeader from "../services/auth-header"
const PostPage = () => {

    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState({
        content: ''
    })
    
    const API_URL2 = `https://login2-production.up.railway.app/api/posts/${postId}`;
    useEffect(() => {
        // load post of postId 
        myAxios.get(API_URL2 , { headers: authHeader() }).then(data => {
            console.log(data);
            setPost(data)

        }).catch(error => {
            console.log(error)
            toast.error("Error in loading post")
        })

    }, [])

    const printDate = (numbers) => {

        return new Date(numbers).toLocaleDateString()
    }

    const submitPost=()=>{

        if(!isLoggedIn()){
                toast.error("Need to login first !!")
                return
        }

        if(comment.data.content.trim()===''){
            return
        }
        
    }

    return (

        <Base>


            <Container className="mt-4">

                <Link to="/">Home</Link> / {post && (<Link to="" >  {post.data.title} </Link>)}

                <Row>

                    <Col md={{
                        size: 12
                    }}>

                        <Card className="mt-3 ps-2 border-0 shadow-sm" >


                            {
                                (post) && (
                                    <CardBody>
                                        <CardText> <b>{printDate(post.data.addedDate)} </b> </CardText>

                                        <CardText>
                                            <span className="text-muted">{post.data.category.categoryTitle}</span>
                                        </CardText>

                                        <div className="divder" style={{
                                            width: '100%',
                                            height: '1px',
                                            background: '#e2e2e2'

                                        }}></div>

                                        <CardText className="mt-3">
                                            <h1>{post.data.title}</h1>
                                        </CardText>
                                        <div className="image-container  mt-4 shadow  " style={{ maxWidth: '50%' }}>
                                            <img className="img-fluid" src={BASE_URL + '/post/image/' + post.imageName} alt="" />
                                        </div>
                                        <CardText className="mt-5" dangerouslySetInnerHTML={{ __html: post.data.content }}>

                                        </CardText>

                                    </CardBody>
                                )
                            }

                        </Card>

                    </Col>
                </Row>

                <Row className="my-4">

                    <Col md={

                        {   
                            size: 9,
                            offset: 1
                        }
                    }>
                        <h3>Comments ( {post ? post.data.comments.length : 0} )</h3>

                        {
                            post && post.data.comments.map((c, index) => (
                                <Card className="mt-4 border-0" key={index}>
                                    <CardBody>
                                        <CardText>
                                            {c.content}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            ))
                        }

                        <Card className="mt-4 border-0" >
                            <CardBody>

                                <Input
                                    type="textarea"
                                    placeholder="Enter comment here"
                                    value={comment.content}
                                    onChange={(event) => setComment({content:event.target.value})}
                                />

                                <Button  onClick={submitPost} className="mt-2" color="primary">Submit</Button>
                            </CardBody>
                        </Card>

                    </Col>

                </Row>

            </Container>


        </Base>

    )
}

export default PostPage