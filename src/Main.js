import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <p className="instructions">
          Click on any of the descriptions below, to vote for your favorites!
        </p>
        <p className="instructions">
          Click on an image to see a larger version
        </p>
        <div className="d-flex flex-wrap justify-content-center">
          {this.props.animalsToDisplay.map(animal => {
            return (
              <HornedBeast
                title={animal.title}
                imageUrl={animal.image_url}
                description={animal.description}
                key={animal._id}
                id={animal._id}
                rating=""
                setShowModal={this.props.setShowModal}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Main;
