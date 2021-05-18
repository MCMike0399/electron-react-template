import logo from "./logo.svg";
import "./App.css";

function escribeArch() {
  const fs = require("fs");
  fs.writeFile("file.txt", "Node Funciona :D", function (err) {
    if (err) throw err;
  });
}

function connectDB() {
  const mysql = require("mysql2");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "mcmike",
    database: "Prueba",
    password: "",
  });
  connection.query("select * from Persona", function (err, results, fields) {
    if (err) {
      throw err;
    }
    console.log(results);
  });
}

function App() {
  escribeArch();
  connectDB();
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
