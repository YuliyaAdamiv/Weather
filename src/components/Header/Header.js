import React from 'react';
import Card from '../Card/CardHeader';

function Header() {
  let defaultCities = [
    {name: 'London'},
    {name: 'Paris'},
    {name: 'Tokyo'},
    {name: 'Kiev'},
  ];
  var cities = JSON.parse(localStorage.getItem('cities') || '{}');
  if (!Object.keys(cities).length) {
    cities = defaultCities;
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  return (
    <div className="header">
      {cities.map((item) => {
        return <Card key={item.name} name={item.name} />;
      })}
    </div>
  );
}

export default Header;
