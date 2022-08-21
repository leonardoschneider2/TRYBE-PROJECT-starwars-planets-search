import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filters() {
  const {
    filterNumeric,
    removeFilter,
    removeAllFilters,
  } = useContext(StarWarsContext);

  const buttonRmAll = filterNumeric.filterByNumericValues.length > 0;

  return (
    <>
      {
        filterNumeric.filterByNumericValues.map((e, i) => (
          <h3 key={ i } data-testid="filter">
            { `${e.column} ${e.comparison} ${e.value}` }
            <button
              type="button"
              onClick={ () => {
                removeFilter(e);
              } }
            >
              X
            </button>
          </h3>
        ))
      }
      {
        (buttonRmAll) ? (
          <button
            type="button"
            data-testid="button-remove-filters"
            onClick={ () => removeAllFilters() }
          >
            Remover todas filtragens
          </button>
        ) : ''
      }
    </>
  );
}

export default Filters;
