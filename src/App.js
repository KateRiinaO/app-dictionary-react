import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">📖 DICTIONARY 📖</h1>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
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
