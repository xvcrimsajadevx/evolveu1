import React, { Component } from 'react';

let cityID = 1;

class AddCity extends Component {
  constructor() {
    super()
    this.state = {
      cityName: 'City ' + cityID,
      cityLat: 0,
      cityLong: 0,
      latSphere: 'north',
      longSphere: 'east',
      cityPop: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

  addCity(vars) {
    let {cityName, cityLat, cityLong, latSphere, longSphere, cityPop, community} = vars;

    let latitude = (latSphere === 'south'? cityLat * -1 : cityLat );
    let longitude = (longSphere === 'west'? cityLong * -1 : cityLong );

    community.createCity(cityName, latitude, longitude, cityPop, cityID)

    cityID = cityID + 1;
  }

  render () {
    let setModal = this.props.setModal;
    let community = this.props.community;

    let cityName = this.state.cityName;
    let cityLat = this.state.cityLat;
    let latSphere = this.state.latSphere;
    let cityLong = this.state.cityLong;
    let longSphere = this.state.longSphere;
    let cityPop = this.state.cityPop;

    let vars = {cityName, cityLat, cityLong, latSphere, longSphere, cityPop, community};

    return(
      <div className='addCity'>
        <h1>Add City</h1>

        <label>City Name: </label><input
          type='text'
          id='cityName'
          onChange={this.handleChange}
          value={this.state.cityName}
        />

        <br />

        <label>Latitude: </label><input
          type='number'
          id='cityLat'
          onChange={this.handleChange}
          value={this.state.cityLat}
        /><select
          id='latSphere'
          onChange={this.handleChange}
          value={this.state.latSphere}
        >
          <option value='north'>North</option>
          <option value='south'>South</option>
        </select>

        <br />

        <label>Longitude: </label><input
          type='number'
          id='cityLong'
          onChange={this.handleChange}
          value={this.state.cityLong}
        /><select
          id='longSphere'
          onChange={this.handleChange}
          value={this.state.longSphere}
        >
          <option value='east'>East</option>
          <option value='west'>West</option>
        </select>

        <br />

        <label>Population: </label><input
          type='number'
          id='cityPop'
          onChange={this.handleChange}
          value={this.state.cityPop}
        />

        <br />

        <button
          onClick={setModal}
        >Close</button>
        <button
          onClick={() => {this.addCity(vars); setModal()}}>Add City</button>
      </div>
    )
  }
}

export default AddCity;
