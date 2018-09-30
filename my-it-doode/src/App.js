import React, { Component } from 'react';
import logo from './logo.svg';
import jsonFile from './json-file.svg';
import converTopdf from './pdf.svg';
import javascriptFormate from './javascript.svg';
import htmlFormat from './html.svg';
import jpg from './jpg.svg';
import zip from './zip.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img src={logo} className="App-logo" alt="logo" />
                <span>IT Dude</span></a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Convert</a></li>
              <li><a href="#">Compress</a></li>
              <li><a href="#">Formate</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <h3 className="quick-link-head">Here are your quick utilites</h3>
          </div>
          <div className="row">
            <div className="col-md-4 card-main">
              <div className="card-sub">
                <img src={jsonFile} className="quick-link-tile" alt="Formate JSON" />
                <h4>Formate JSON</h4>
              </div>
            </div>
            <div className="col-md-4 card-main">
              <div className="card-sub">
                <img src={javascriptFormate} className="quick-link-tile" alt="Formate JS" />
                <h4>Formate javascript</h4>
              </div>
            </div>
            <div className="col-md-4 card-main">
              <div className="card-sub">
                <img src={htmlFormat} className="quick-link-tile" alt="Formate HTML" />
                <h4>Formate HTML</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 card-main">
              <div className="card-sub">
                <img src={converTopdf} className="quick-link-tile" alt="converTopdf" />
                <h4>convert any to pdf</h4>
              </div>
            </div>
            <div className="col-md-4 card-main">
              <div className="card-sub">
                <img src={zip} className="quick-link-tile" alt="Compress to ZIP" />
                <h4>Compress to ZIP</h4>
              </div>
            </div>
            <div className="col-md-4 card-main">
              <div className="card-sub">
                <img src={jpg} className="quick-link-tile" alt="compress your image" />
                <h4>Compress your image</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
