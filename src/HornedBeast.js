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

  handleImageClick = () => {
    this.props.setShowModal(this.props.id);
  };

  render() {
    return (
      <div className="bg-light border m-4 card">
        <Card border="secondary" style={{ width: '15rem', height: '22rem' }}>
          <div className="text-center m-2" onClick={this.handleImageClick}>
            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              className="w-50"
            />
          </div>
          <div onClick={this.handleClick}>
            <Card.Body>
              <div className="text-center">
                <Card.Title>{this.props.title}</Card.Title>
              </div>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>Rating: {this.state.rating}</Card.Text>
            </Card.Body>
          </div>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
