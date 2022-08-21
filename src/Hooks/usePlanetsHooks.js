import { useEffect, useState } from 'react';

function usePlanetsHooks(initialValue) {
  const [planets, setPlanets] = useState(initialValue);

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getPlanets = async () => {
      const planetsData = await fetch(url).then((response) => response.json());
      setPlanets(planetsData);
    };
    getPlanets();
  }, []);

  return [planets, setPlanets];
}

export default usePlanetsHooks;
