import React from 'react';
import './App.css';
import HornedBeast from './HornedBeast';
import gazelle from './gazelle.jpg';
import sheep from './sheep.jpg';

class Main extends React.Component {
  render() {
    // const hornedAnimals = [
    //   {
    //     title: 'Gazelle',
    //     imageUrl: { gazelle },
    //     description:
    //       'Taken in safari in the Serengeti, Tanzania, taken by Magdalena Kula Manchee on Unsplash',
    //   },
    //   {
    //     title: 'Sheep',
    //     imageUrl: { sheep },
    //     description:
    //       'A stone sheep glares at us in Canada’s Jasper National Park, taken by Paxson Woelber on Unsplash',
    //   },
    // ];

    // const images = hornedAnimals.map((title, imageUrl, description) => {
    //   return (
    //     <div>
    //       <HornedBeast
    //         title={title}
    //         imageUrl={imageUrl}
    //         description={description}
    //       />
    //     </div>
    //   );
    // });

    return (
      <>
        <div>
          <HornedBeast
            title="Gazelle"
            imageUrl={gazelle}
            description="Taken in safari in the Serengeti, Tanzania, taken by Magdalena Kula Manchee on Unsplash"
          />
        </div>
        <div>
          <HornedBeast
            title="Sheep"
            imageUrl={sheep}
            description="A stone sheep glares at us in Canada’s Jasper National Park, taken by Paxson Woelber on Unsplash"
          />
        </div>
      </>
    );
  }
}

export default Main;
