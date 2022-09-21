import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
