import React from 'react';
import './App.css';
import Search from './components/Search';
import TableWars from './components/TableWars';
import StarWarsContext from './Context/StarWarsContext';
import StarWarsProvider from './Context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider value={ StarWarsContext }>
      <Search />
      <TableWars />
    </StarWarsProvider>
  );
}

export default App;
