import React, { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import { Button, Card, CardBody, CardText, Col,Row ,PaginationItem,Pagination,PaginationLink, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
import Base from './Base';
import InfiniteScroll from 'react-infinite-scroll-component';

function CardComponent() {
  const [data, setData] = useState([]);


  const [postContent, setPostContent] = useState({
    content: [],
    totalPages: '',
    totalElements: '',
    pageSize: '',
    lastPage: false,
    pageNumber: ''

})

const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        console.log("loading posts")
        console.log(currentPage)
        // changePage(currentPage)

    }, [currentPage])


  const API_URL2 = 'https://login2-production.up.railway.app/api/posts';


  useEffect(() => {
    // Replace with the actual API endpoint
    fetch(API_URL2 , { headers: authHeader() })
      .then((response) => response.json())
      .then((responseData) => {
        // Assuming responseData is an object with arrays
        setData(responseData.content);
        console.log(responseData.content);
      })
      .catch((error) => {

        console.error('Error fetching data:', error);
      });
  }, []);



  const changePageInfinite=()=>{
    console.log("its working");
    setPostContent(setCurrentPage(currentPage+1))
  }

  const currentPageNumber =()=>{}
  return (
    <div  className='container-fluid'>
      <Base/>
      <InfiniteScroll dataLength={data.length} next={changePageInfinite} hasMore={!postContent.lastPage} >

      <Row>
          
          <Col md={{
              size:10,offset:1}}>
              
      
        <Card className='border-0 shadow-sm mt-10'>
        <CardBody><ul>        {data.map((item, index) => (
          <li key={index}>
            <h1>{item.title}</h1>
            <CardText>
            {item.content}</CardText>
            <img src={item.imageName} alt="Image" />
            <p>Date Added: {item.dateAdded}</p>
            {/* Render other properties as needed */}
            <Link className='btn btn-secondary' to={'/post2/'+index}>Read More</Link>

          </li>
      ))}
</ul>
{/* <Container>
<Pagination>
  <PaginationItem>
    <PaginationLink previous>

    </PaginationLink>
  </PaginationItem>
  {

  }
  <PaginationItem>
    <PaginationLink next>

    </PaginationLink>
  </PaginationItem>
</Pagination>
</Container> */}
      </CardBody>
      </Card>
      </Col>
      </Row>
      </InfiniteScroll>

    </div>
  );
}

export default CardComponent;
