import { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import fantasy from '../data/books/fantasy.json'
import history from '../data/books/history.json'
import horror from '../data/books/horror.json'
import romance from '../data/books/romance.json'
import scifi from '../data/books/scifi.json'

class AllTheBooks extends Component {
    render () {
        return (
            <Container className='mt-5'>
            <Row>
                <h2>Fantasy</h2>
                {fantasy.map((fantasyBook)=>{
                    return (
                    <Col xs={6} md={8} lg={3} className='mt-4 d-flex' key={fantasyBook.asin}>
                        <Card className='mb-4'>
                            <Card.Img variant="top" src={fantasyBook.img}/>
                            <Card.Body>
                                <Card.Title>{fantasyBook.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Category {fantasyBook.category}</ListGroup.Item>
                                <ListGroup.Item>Price {fantasyBook.price} €</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    )
                })}
            </Row>

            <Row>
                <h2>History</h2>
                 {history.map((historyBook)=>{
                    return (
                    <Col xs={6} md={8} lg={3} className='mt-4 d-flex' key={historyBook.asin}>
                        <Card className='mb-4'>
                            <Card.Img variant="top" src={historyBook.img}/>
                            <Card.Body>
                                <Card.Title>{historyBook.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Category {historyBook.category}</ListGroup.Item>
                                <ListGroup.Item>Price {historyBook.price} €</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    )
                })}
            </Row>

            <Row>
                <h2>Horror</h2>
                {horror.map((horrorBook)=>{
                    return (
                    <Col xs={6} md={8} lg={3} className='mt-4 d-flex' key={horrorBook.asin}>
                        <Card className='mb-4'>
                            <Card.Img variant="top" src={horrorBook.img}/>
                            <Card.Body>
                                <Card.Title>{horrorBook.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Category {horrorBook.category}</ListGroup.Item>
                                <ListGroup.Item>Price {horrorBook.price} €</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    )
                })}
            </Row>

            <Row>
                <h2>Romance</h2>
                {romance.map((romanceBook)=>{
                    return (
                    <Col xs={6} md={8} lg={3} className='mt-4 d-flex' key={romanceBook.asin}>
                        <Card className='mb-4'>
                            <Card.Img variant="top" src={romanceBook.img}/>
                            <Card.Body>
                                <Card.Title>{romanceBook.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Category {romanceBook.category}</ListGroup.Item>
                                <ListGroup.Item>Price {romanceBook.price} €</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    )
                })}
            </Row>

            <Row>
                <h2>Scifi</h2>
                {scifi.map((scifiBook)=>{
                    return (
                    <Col xs={6} md={8} lg={3} className='mt-4 d-flex' key={scifiBook.asin}>
                        <Card className='mb-4'>
                            <Card.Img variant="top" src={scifiBook.img}/>
                            <Card.Body>
                                <Card.Title>{scifiBook.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Category {scifiBook.category}</ListGroup.Item>
                                <ListGroup.Item>Price {scifiBook.price} €</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
        </Container>
        )
    }
}

// function AllTheBooks() {
//     return (
//         <Container className='mt-5'>
//             <Row>
//                 <Col>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                             </Card.Text>
//                         </Card.Body>
//                         <ListGroup className="list-group-flush">
//                             <ListGroup.Item>Cras justo odio</ListGroup.Item>
//                             <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//                             <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//                         </ListGroup>
//                         <Card.Body>
//                             <Card.Link href="#">Card Link</Card.Link>
//                             <Card.Link href="#">Another Link</Card.Link>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>

//     );
// }

export default AllTheBooks;