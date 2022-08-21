import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Search() {
  const {
    filterName,
    setFilterName,
    filterNumeric,
    setFilterNumeric,
    columnOptions,
    setColumn,
    column,
  } = useContext(StarWarsContext);

  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  return (
    <div className="search">
      <input
        type="text"
        onChange={ (e) => setFilterName(e.target.value) }
        value={ filterName.filterByName.name }
        data-testid="name-filter"
      />
      <div className="filter-options">
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {
            columnOptions.map((option) => (
              <option
                key={ option }
              >
                { option }
              </option>
            ))
          }
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setFilterNumeric({ column, comparison, value }) }
        >
          Filtrar
        </button>
      </div>
      {
        filterNumeric.filterByNumericValues
          .map((e, i) => <h3 key={ i }>{ `${e.column} ${e.comparison} ${e.value}` }</h3>)
      }
    </div>
  );
}

export default Search;
