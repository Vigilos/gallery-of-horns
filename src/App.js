import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './assets/data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedAnimal: {},
    };
  }

  setShowModal = id => {
    if (id !== false) {
      let filteredAnimal = data.filter(v => v._id === id);
      this.setState({ selectedAnimal: filteredAnimal[0] });
      this.setState({ showModal: true });
    } else {
      this.setState({ showModal: false });
    }
  };

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Main data={data} setShowModal={this.setShowModal} />
        </main>
        <footer>
          <Footer />
        </footer>
        <SelectedBeast
          showModal={this.state.showModal}
          setShowModal={this.setShowModal}
          selectedAnimal={this.state.selectedAnimal}
        />
      </>
    );
  }
}

export default App;
