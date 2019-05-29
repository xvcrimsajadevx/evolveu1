const latitude = (city) => {
  if (city.latitude > 0) {
    return (city.latitude + '°N');
  } else if (city.latitude < 0) {
    return (city.latitude * -1 + '°S');
  } else {
    return city.latitude + '°'
  };
}

const longitude = (city) => {
  if (city.longitude > 0) {
    return (city.longitude + '°E');
  } else if (city.longitude < 0) {
    return (city.longitude * -1 + '°W');
  } else {
    return city.longitude + '°'
  };
}

const findHemisphere = (city) => {
  if ( city.latitude > 0 && city.longitude > 0 ) {
    return "North Eastern";
  } else if (city.latitude < 0 && city.longitude > 0) {
    return "South Eastern";
  } else if (city.latitude > 0 && city.longitude < 0) {
    return "North Western";
  } else if (city.latitude < 0 && city.longitude < 0) {
    return "South Western";
  } else if (city.latitude === 0 && city.longitude > 0) {
    return "Equatorial East";
  } else if (city.latitude === 0 && city.longitude < 0) {
    return "Equatorial West";
  } else if (city.latitude > 0 && city.longitude === 0) {
    return "North Meridian";
  } else if (city.latitude < 0 && city.longitude === 0) {
    return "South Meridian";
  } else {
    return "Equatorial Meridian"
  }
}

export default { latitude, longitude, findHemisphere };
