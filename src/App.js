import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import AddBtn from './components/layout/AddBtn';
import SearchBar from './components/layout/SearchBar';
import Logs from './logs/Logs';
import AddLogModel from './logs/AddLogModal';
function App() {
  useEffect(() => {
    //initalialize materialize js
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <AddBtn />
      <AddLogModel />
      <Logs />
    </Fragment>
  );
}

export default App;
