import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main-content"> Content Body !</main>

      {/* // HomePage
      // ContactPage
      // AboutPage
      // ServicesPage
      // BlogPage
      // CareersPage
      // SupportPage */}

      <Footer />
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>this is our new para.. editing the index.html</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
