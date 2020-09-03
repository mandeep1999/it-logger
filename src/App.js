import React, {useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './logs/Logs';

function App() {
  useEffect(()=>{
    //initalialize materialize js
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar/>
      <Logs/>
    </Fragment>
  );
}

export default App;
