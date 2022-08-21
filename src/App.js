import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Search from './components/Search';
import SortComponent from './components/SortComponent';
import TableWars from './components/TableWars';
import StarWarsContext from './Context/StarWarsContext';
import StarWarsProvider from './Context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider value={ StarWarsContext }>
      <Search />
      <Filters />
      <SortComponent />
      <TableWars />
    </StarWarsProvider>
  );
}

export default App;
