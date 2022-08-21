import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import usePlanetsHooks from '../Hooks/usePlanetsHooks';

function StarWarsProvider({ children }) {
  // states from my application
  const [planets, setPlanets] = usePlanetsHooks({ results: [] });
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterNumeric, setFilterNumeric] = useState({
    filterByNumericValues: [] });
  const [columnOptions, setColumnOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [column, setColumn] = useState('population');

  useEffect(() => {
    console.log('option', columnOptions[0]);
    setColumn(columnOptions[0]);
  }, [columnOptions]);

  // function to change my states
  const changeFilterName = (value) => {
    setFilterName({ filterByName: { name: value } });
  };

  const changeFilterNumeric = (value) => {
    setColumnOptions(columnOptions.filter((e) => e !== value.column));
    setFilterNumeric({
      filterByNumericValues: [
        ...filterNumeric.filterByNumericValues,
        value,
      ],
    });
  };

  // my context
  const context = {
    planets,
    setPlanets,
    filterName,
    filterNumeric,
    setFilterName: changeFilterName,
    setFilterNumeric: changeFilterNumeric,
    columnOptions,
    setColumn,
    column,
  };

  // return of Provider
  return (
    <StarWarsContext.Provider value={ context }>
      {
        children
      }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
