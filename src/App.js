import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Row} from 'react-bootstrap';
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";


function App() {
  return (
    <div className="App">
      
      <Row className="landing">
        <div className="col-md-6 col-xs-12">
        <LeftSide />
        </div>
        <div className="col-md-6 col-xs-12">
        <RightSide />
        </div>
      </Row>
    </div>
  );
}

export default App;