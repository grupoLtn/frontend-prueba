import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';

const App = () => {

    return(

     
      <Fragment>

        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>

      </Fragment>

    );
}

export default App;


