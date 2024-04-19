import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MovieCard = ({movie}) => {
  return (
    <Card className='flex'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.img} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        
        <ListGroup variant="flush">
        <ListGroup.Item>Rating : {movie.rating}</ListGroup.Item>
        <ListGroup.Item>Description : {movie.description}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default MovieCard