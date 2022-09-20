import React from 'react';
import './App.css';
import HornedBeast from './HornedBeast';
import data from './assets/data.json';

class Main extends React.Component {
  render() {
    return (
      <>
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
        ;
      </>
    );
  }
}

export default Main;
