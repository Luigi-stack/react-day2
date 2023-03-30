import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { Component } from 'react'

class SingleBook extends Component {

    state = {
        search: true,
    }

    render () {
        return (
            <Col xs={6} md={4} lg={3} xl={2} className='mt-4 d-flex' key={this.props.asin}>
            <Card className='mb-4'>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title className='fs-5'>{this.props.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
        )
    }
}

// function SingleBook(books) {
//     return (
//                 <Col xs={6} md={4} lg={3} xl={2} className='mt-4 d-flex' key={books.asin}>
//                     <Card className='mb-4'>
//                         <Card.Img variant="top" src={books.img} />
//                         <Card.Body>
//                             <Card.Title className='fs-5'>{books.title}</Card.Title>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//     )
// }

export default SingleBook