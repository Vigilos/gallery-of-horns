import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: this.props.rating };
  }

  // Handle a click on any card
  handleClick = () => {
    this.setState({ rating: this.state.rating + '❤️' });
  };

  render() {
    return (
      // <div className="bg-light border d-inline-block">
      <div className="bg-light border m-4 card">
        <Card
          border="secondary"
          style={{ width: '15rem', height: '22rem' }}
          onClick={this.handleClick}
        >
          <div className="text-center m-2">
            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              className="w-50"
            />
          </div>
          <Card.Body>
            <div className="text-center">
              <Card.Title>{this.props.title}</Card.Title>
            </div>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Rating: {this.state.rating}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
