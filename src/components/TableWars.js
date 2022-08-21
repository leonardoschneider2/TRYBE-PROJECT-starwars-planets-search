import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import './tablewars.css';

function TableWars() {
  const { planets, filterName, filterNumeric } = useContext(StarWarsContext);
  // aplicando os filtros de name
  const planetsFilteredByName = planets.results
    .filter((e) => e.name.toLowerCase()
      .includes((filterName.filterByName.name).toLowerCase()));

  console.log(planetsFilteredByName);
  // aplicando os filtros numéricos
  const data = filterNumeric.filterByNumericValues
    .reduce((acc, e) => acc.filter((planet) => {
      switch (e.comparison) {
      case 'maior que':
        return parseFloat(planet[e.column]) > parseFloat(e.value);
      case 'menor que':
        return parseFloat(planet[e.column]) < parseFloat(e.value);
      default:
        return parseFloat(planet[e.column]) === parseFloat(e.value);
      }
    }), planetsFilteredByName);
  const headers = [
    'climate',
    'created',
    'diameter',
    'edited',
    'films',
    'gravity',
    'name',
    'orbital_period',
    'population',
    'rotation_period',
    'surface_water',
    'terrain',
    'url',
  ];
  return (
    <table className="table-wars">
      <thead>
        <tr className="table-line">
          {
            headers.map((e) => <th className="table-header" key={ e }>{ e }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet) => {
            const {
              climate,
              created,
              diameter,
              edited,
              films,
              gravity,
              name,
              orbital_period: orbitalPeriod,
              population,
              rotation_period: rotationPeriod,
              surface_water: surfaceWater,
              terrain,
              url,
            } = planet;
            return (
              <tr className="table-line" key={ planet.name }>
                <td className="table-data">{ climate }</td>
                <td className="table-data">{ created }</td>
                <td className="table-data">{ diameter }</td>
                <td className="table-data">{ edited }</td>
                <td className="table-data">{ films }</td>
                <td className="table-data">{ gravity }</td>
                <td className="table-data">{ name }</td>
                <td className="table-data">{ orbitalPeriod }</td>
                <td className="table-data">{ population }</td>
                <td className="table-data">{ rotationPeriod }</td>
                <td className="table-data">{ surfaceWater }</td>
                <td className="table-data">{ terrain }</td>
                <td className="table-data">{ url }</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default TableWars;
