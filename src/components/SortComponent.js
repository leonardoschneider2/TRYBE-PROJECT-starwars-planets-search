import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function SortComponent() {
  const {
    getNewOrdenador,
  } = useContext(StarWarsContext);
  const listKeys = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const [choosedKey, setChoosedKey] = useState('population');
  const [choosedSort, setChoosedSort] = useState('');

  const disabled = !(choosedKey !== '' && choosedSort !== '');

  return (
    <div className="sort-component">
      <select
        onChange={ (e) => {
          setChoosedKey(e.target.value);
        } }
        data-testid="column-sort"
      >
        {
          listKeys.map((option, i) => (
            <option key={ i }>{ option }</option>
          ))
        }
      </select>

      <label htmlFor="radio-asc">
        Ascendente
        <input
          value="ASC"
          onClick={ (e) => setChoosedSort(e.target.value) }
          id="radio-asc"
          type="radio"
          name="sort"
          data-testid="column-sort-input-asc"
        />
      </label>

      <label htmlFor="radio-desc">
        Descendente
        <input
          value="DESC"
          id="radio-desc"
          onClick={ (e) => setChoosedSort(e.target.value) }
          type="radio"
          name="sort"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        disabled={ disabled }
        type="button"
        data-testid="column-sort-button"
        onClick={ () => getNewOrdenador(choosedKey, choosedSort) }
      >
        Ordenar
      </button>
    </div>
  );
}

export default SortComponent;
