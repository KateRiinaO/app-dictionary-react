import "./App.css";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>DICTIONARY</h1>
          <img
            src={logo}
            alt="logo-katerina-orrava"
            className="logo img-fluid"
          />
        </header>
        <footer>
          <small className="footer">
            This project was coded by Katerīna Orrava and is open-sourced on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/KateRiinaO/app-dictionary-react"
              className="github-link"
            >
              {" "}
              GitHub{" "}
            </a>
            and hosted on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://leafy-puppy-a66235.netlify.app"
              className="netlify-link"
            >
              {" "}
              Netlify
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
