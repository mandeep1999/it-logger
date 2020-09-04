import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import AddBtn from './components/layout/AddBtn';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddLogModel from './components/logs/AddLogModal';
import EditLogModel from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
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
      <EditLogModel />
      <AddTechModal />
      <TechListModal />
      <Logs />
    </Fragment>
  );
}

export default App;
