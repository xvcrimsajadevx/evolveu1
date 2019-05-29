import React, { Component } from 'react';
import scripts from './scripts';

class CityDisplay extends Component {
  constructor() {
    super()
    this.state = {
      popAmount: 0,
      operator: "moveIn",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

  updatePop(city, popAmount, operator) {
    if (popAmount < 0) {
       alert('You cannont move a negative number of people');
       this.setState({
         popAmount: 0
       })
    } else {
      if (operator === "moveIn") {
        city.moveIn(popAmount);
        this.setState({
          popAmount: 0
        })
      } else if (operator === "moveOut") {
        ( (popAmount > city.population) ? alert("You cannot move more people out than there is population") :
          city.moveOut(popAmount) )
        this.setState({
          popAmount: 0
        })
      }
    }
  }

  deleteCity(community, city) {
    console.log(city);

    var index = community.cities.indexOf(city);

    if (index > -1) {
      community.cities.splice(index, 1);
    }
  }

  render () {
    let setModal = this.props.setModal;
    let community = this.props.community;
    let cityID = this.props.cityID;

    let city = community.cities.find(city => { return city.cityID === cityID } );

    let popAmount = this.state.popAmount;
    let operator = this.state.operator;

    return(
      <div className='cityDisplay'>
        <h6>The {city.howBig()} of</h6>
        <h1>{city.name}</h1>
        <button className='closeButton' onClick={setModal}>Close</button>
        <hr/>
        <table>
          <tbody>
            <tr>
              <td>Latitude</td><td className='col2'>{scripts.latitude(city)}</td>
            </tr>
            <tr>
              <td>Longitude</td><td className='col2'>{scripts.longitude(city)}</td>
            </tr>
            <tr>
              <td>Population</td><td className='col2'>{city.population}</td>
            </tr>
            <tr>
              <td>Community Type</td><td className='col2'>{city.howBig()}</td>
            </tr>
            <tr>
            <td>Hemisphere</td><td className='col2'>{scripts.findHemisphere(city)}</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <fieldset>
          <legend>Population Update</legend>
            <span className='populationUpdate'>
              <input
                type='number'
                id='popAmount'
                onChange = {this.handleChange}
                value = {this.state.popAmount}
                min="0"
                max={city.population}
              /> people have <select id="operator" onChange = {this.handleChange}>
                <option value="moveIn">moved in</option>
                <option value="moveOut">moved out</option>
              </select>
            </span>
            <button className='updateCity' onClick={() => this.updatePop(city, popAmount, operator)}>Update City</button>
        </fieldset>
        <button className='updateCity' onClick={() => {this.deleteCity(community, city); setModal()}}>Delete City</button>
      </div>
    )
  }
}

export default CityDisplay;
