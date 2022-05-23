const stateList = [
  { name: 'AL', stateCode: 'US-AL' },
  { name: 'AK', stateCode: 'AK' },
  { name: 'AS', stateCode: 'AS' },
  { name: 'AZ', stateCode: 'AZ' },
  { name: 'AR', stateCode: 'AR' },
  { name: 'CA', stateCode: 'CA' },
  { name: 'CO', stateCode: 'CO' },
  { name: 'CT', stateCode: 'CT' },
  { name: 'DE', stateCode: 'DE' },
  { name: 'DC', stateCode: 'DC' },
  { name: 'FL', stateCode: 'FL' },
  { name: 'GA', stateCode: 'GA' },
  { name: 'GU', stateCode: 'GU' },
  { name: 'HI', stateCode: 'HI' },
  { name: 'ID', stateCode: 'ID' },
  { name: 'IL', stateCode: 'IL' },
  { name: 'IN', stateCode: 'IN' },
  { name: 'IA', stateCode: 'IA' },
  { name: 'KS', stateCode: 'KS' },
  { name: 'KY', stateCode: 'KY' },
  { name: 'LA', stateCode: 'LA' },
  { name: 'ME', stateCode: 'ME' },
  { name: 'MD', stateCode: 'MD' },
  { name: 'MA', stateCode: 'MA' },
  { name: 'MI', stateCode: 'MI' },
  { name: 'MN', stateCode: 'MN' },
  { name: 'MS', stateCode: 'MS' },
  { name: 'MO', stateCode: 'MO' },
  { name: 'MT', stateCode: 'MT' },
  { name: 'NE', stateCode: 'NE' },
  { name: 'NV', stateCode: 'NV' },
  { name: 'NH', stateCode: 'NH' },
  { name: 'NJ', stateCode: 'NJ' },
  { name: 'NM', stateCode: 'NM' },
  { name: 'NY', stateCode: 'NY' },
  { name: 'NC', stateCode: 'NC' },
  { name: 'ND', stateCode: 'ND' },
  { name: 'MP', stateCode: 'MP' },
  { name: 'OH', stateCode: 'OH' },
  { name: 'OK', stateCode: 'OK' },
  { name: 'OR', stateCode: 'OR' },
  { name: 'PA', stateCode: 'PA' },
  { name: 'PR', stateCode: 'PR' },
  { name: 'RI', stateCode: 'RI' },
  { name: 'SC', stateCode: 'SC' },
  { name: 'SD', stateCode: 'SD' },
  { name: 'TN', stateCode: 'TN' },
  { name: 'TX', stateCode: 'TX' },
  { name: 'UT', stateCode: 'UT' },
  { name: 'VT', stateCode: 'VT' },
  { name: 'VI', stateCode: 'VI' },
  { name: 'VA', stateCode: 'VA' },
  { name: 'WA', stateCode: 'WA' },
  { name: 'WV', stateCode: 'WV' },
  { name: 'WI', stateCode: 'WI' },
  { name: 'WY', stateCode: 'WY' },
];

async function getWeather(path) {
  try {
    const res = await fetch(path);
    const json = await res.json();
    const weatherData = {
      code: json.cod,
      coord: json.coord,
      temp: json.main.temp,
      humidity: json.main.humidity,
      feels_like: json.main.feels_like,
      wind_speed: json.wind.speed,
      temp_min: json.main.temp_min,
      temp_max: json.main.temp_max,
      description: json.weather[0].description,
    };
    return weatherData;
  // eslint-disable-next-line keyword-spacing
  } catch(err) {
    return err;
  }
}

function getWeatherByZip(apiKey, zip, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
  return getWeather(path);
}

function getWeatherByCity(apiKey, city, state, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&appid=${apiKey}&units=${units}`;
  return getWeather(path);
}

function getWeatherByGeo(apiKey, lat, lon, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  return getWeather(path);
}

export {
  getWeatherByZip,
  getWeatherByCity,
  getWeatherByGeo,
  stateList,
};
