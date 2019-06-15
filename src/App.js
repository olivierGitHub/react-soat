import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Presentation from './components/presentation/Presentation'
import Formation from './components/formation/Formation'
import Partage from './components/partage/Partage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route path="/presentation" component={Presentation} />
          <Route path="/formation" component={Formation} />
          <Route path="/partage" component={Partage} />
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
