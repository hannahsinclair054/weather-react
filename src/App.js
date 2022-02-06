import logo from "./logo.svg";
import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - this is soo cool 😎
        </a>

        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
