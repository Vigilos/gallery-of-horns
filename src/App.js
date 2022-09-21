import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './assets/data.json';

// For Modal
import Modal from 'react-bootstrap/Modal';

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
      console.log(this.state.showModal);
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

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={v => this.props.setShowModal(false)}
        >
          <div className="text-center">
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selectedAnimal.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="w-75"
                src={this.props.selectedAnimal.image_url}
                alt={this.props.selectedAnimal.title}
              />
              <p>{this.props.selectedAnimal.description}</p>
            </Modal.Body>
          </div>
          <Modal.Footer>
            {/* <Button
              variant="secondary"
              onClick={v => this.props.setShowModal(false)}
            >
              Close
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
