import React from 'react';

class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = { this.props.rating}
  } 
  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.src} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
  }
}

export default HornedBeast;
