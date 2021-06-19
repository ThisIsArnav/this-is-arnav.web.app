import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Arnav Singh</p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCCxKLrv31g8Z3z1kKtsKkpw"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/thisisarnav/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://twitter.com/UserArnavSingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="App-link"
          href="https://github.com/ThisIsArnav"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
