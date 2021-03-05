import React from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import GlobalStyle from './GlobalStyle'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/" exact component={Home}/>
    </div>
  );
}

export default App;