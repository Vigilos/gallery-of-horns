import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: this.props.rating };
  }

  // Handle a click on any card
  handleClick = () => {
    this.setState({ rating: this.state.rating + '❤' });
  };

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.imageUrl} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Rating: {this.state.rating}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>
            Vote as Favorite
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
