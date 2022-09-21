import React from 'react';
import HornedBeast from './HornedBeast';
import data from './assets/data.json';

class Main extends React.Component {
  render() {
    return (
      <>
        <p id="instructions">
          Click on any of the images below, to vote for your favorites!
        </p>
        <div className="d-flex flex-wrap justify-content-center">
          {data.map(animal => {
            return (
              <HornedBeast
                title={animal.title}
                imageUrl={animal.image_url}
                description={animal.description}
                key={animal._id}
                rating=""
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Main;
