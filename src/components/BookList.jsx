import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SingleBook from "./SingleBook"

import fantasy from '../data/books/fantasy.json'

import { Component } from 'react'

class BookList extends Component {

    

    render () {
        return (
            <Container>
                <Row>
                    {fantasy.map((fantasyBook) => {
                        return (
                            <SingleBook key={fantasyBook.asin} img={fantasyBook.img} title={fantasyBook.title} />
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default BookList
