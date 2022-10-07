import React, { useMemo, useState } from "react";

type SelectCityType = {
  id: number;
  city: string;
  population: number;
  country: string;
};

const SelectCity = (props: { cities: Array<SelectCityType> }) => {
  console.log("SelectCity");
  const [selVal, setSelVal] = useState("");

  const onSetSelValHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelVal(e.currentTarget.value);
  };
  return (
    <select value={selVal} onChange={onSetSelValHandler}>
      {props.cities.map((c, idx) => (
        <option key={idx}>{c.city}</option>
      ))}
    </select>
  );
};
const Cities = React.memo(SelectCity);

export const Sample3 = () => {
  const [counter, setCounter] = useState(5);
  const [cities, setCities] = useState([
    { id: 1, city: "Kiev", population: 4000000, country: "Ukraine" },
    { id: 2, city: "Kharkiv", population: 1000000, country: "Ukraine" },
    { id: 3, city: "Odesa", population: 2000000, country: "Ukraine" },
    { id: 4, city: "New-York", population: 8000000, country: "USA" },
    { id: 5, city: "San Francisco", population: 6000000, country: "USA" },
    { id: 6, city: "Kansas City", population: 300000, country: "USA" },
    { id: 7, city: "Tbilisi", population: 1000000, country: "Georgia" },
    { id: 8, city: "Kutaisi", population: 500000, country: "Georgia" },
    { id: 9, city: "Lviv", population: 800000, country: "Ukraine" },
  ]);
  console.log("Sample3");

  const getProperArr = (cities: SelectCityType[]) => {
    const citiesWithK = cities.filter(
      (u) => u.city.toLowerCase().indexOf("k") > -1
    );
    const ukrCitiesArr = cities.filter((c) => c.country === "Ukraine");
    const citiesWithLowPopulation = cities.filter(
      (c) => c.population <= 1000000
    );
    return {
      citiesWithK,
      ukrCitiesArr,
      citiesWithLowPopulation,
    };
  };

  const citiesWithK = useMemo(() => {
    return getProperArr(cities).citiesWithK;
  }, [cities]);

  const ukrCitiesArr = useMemo(() => {
    return getProperArr(cities).ukrCitiesArr;
  }, [cities]);
  const citiesWithLowPopulation = useMemo(() => {
    return getProperArr(cities).citiesWithLowPopulation;
  }, [cities]);
  const onIncrementCountHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={onIncrementCountHandler}>+</button>
      <button onClick={() => setCities([])}>Reset cities</button>
      <Cities cities={citiesWithK} />
      <Cities cities={ukrCitiesArr} />
      <Cities cities={citiesWithLowPopulation} />
    </>
  );
};
