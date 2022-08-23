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
  const [sortOrdenator, setSortOrdenador] = useState({
    order: { column: 'population', sort: 'ASC' } });

  useEffect(() => {
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

  const removeFilter = (removedFilter) => {
    const value = filterNumeric.filterByNumericValues
      .filter((eachNumericFilter) => {
        const numericOne = JSON.stringify(eachNumericFilter);
        const numericTwo = JSON.stringify(removedFilter);
        return numericOne !== numericTwo;
      });
    // now I need to get the value of column item to columnOptions again
    setColumnOptions([...columnOptions.concat(removedFilter.column)]);

    // now I need to filter the removedFilter from filterNumeric
    setFilterNumeric({
      filterByNumericValues: [
        ...value,
      ],
    });
  };

  const removeAllFilters = () => {
    setColumnOptions([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ]);
    setFilterNumeric({
      filterByNumericValues: [] });
  };

  const remakePlanetsWithSort = (columnSort, sort) => {
    planets.results.sort((a, b) => {
      const neg = -1;
      const compareOne = a[columnSort];
      if (compareOne === 'unknown') return 1;
      const compareTwo = b[columnSort];
      if (compareTwo === 'unknown') return neg;
      if (sort === 'ASC') {
        return (parseFloat(compareOne) > parseFloat(compareTwo)) ? 1 : neg;
      }
      return (parseFloat(compareOne) > parseFloat(compareTwo)) ? neg : 1;
    });
  };

  const getNewOrdenador = (key, model) => {
    setSortOrdenador({
      order: {
        column: key,
        sort: model,
      },
    });
    remakePlanetsWithSort(key, model);
  };

  // my context
  const context = {
    getNewOrdenador,
    sortOrdenator,
    planets,
    setPlanets,
    filterName,
    filterNumeric,
    setFilterName: changeFilterName,
    setFilterNumeric: changeFilterNumeric,
    columnOptions,
    setColumn,
    setColumnOptions,
    removeFilter,
    removeAllFilters,
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
