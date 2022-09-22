import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './assets/data.json';
import SelectedBeast from './SelectedBeast';
import SearchForm from './SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedAnimal: {},
      animalsToDisplay: data,
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

  filterAnimals = (searchCriteria, searchType) => {
    if (searchType === 'horns') {
      if (searchCriteria === 0) {
        this.setState({
          animalsToDisplay: data,
        });
      } else {
        this.setState({
          animalsToDisplay: data.filter(v => v.horns === searchCriteria),
        });
      }
    } else if (searchType === 'description') {
      if (searchCriteria === '') {
        this.setState({
          animalsToDisplay: data,
        });
      } else {
        this.setState({
          animalsToDisplay: data.filter(v =>
            v.description.toLowerCase().includes(searchCriteria.toLowerCase())
          ),
        });
      }
    } else {
      alert('ERROR: Search type not defined (filterAnimals method)!');
    }
  };

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <SearchForm filterAnimals={this.filterAnimals} />
          <Main
            animalsToDisplay={this.state.animalsToDisplay}
            setShowModal={this.setShowModal}
          />
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
