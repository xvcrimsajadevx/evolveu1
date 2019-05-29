import React, {Component} from 'react';
import Community from './Community';
import CitiesList from './CitiesList';
import {cities} from './citiesData';
import './cities.css';
import CitiesModal from './CitiesModal';

const community = new Community(cities);

class CitiesComp extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      modalFunction: '',
    }
    this.handleModal = this.handleModal.bind(this);
  }

  getNorth() {
    const city = community.getMostNorth();
    return alert(city.show())
  }

  getSouth() {
    const city = community.getMostSouth();
    return alert(city.show())
  }

  handleModal = (event, cityID) => {
    // console.log(event.target)
    this.state.showModal ?
    this.setState({ showModal: false, modalFunction: '', cityID: '' }) :
    this.setState({ showModal: true, modalFunction: event.target.parentNode.id, cityID: cityID })
  }

  render() {
    const cityID = this.state.cityID;

    return(
      <div className='citiesBody' id='citiesBody'>
        <h1>Communities</h1>
        <label className="addCityLabel"><button className="addCityButton" id="addCity">+</button>Add City</label>
        <CitiesList
          community = {community}
          setModal = {this.handleModal}
        />
        <span className='totalDisplay'>Total Population: {community.getPopulation(cities)}</span>
        <br />
        <div className='getButtons'>
          <button onClick={this.getNorth}>Get Most Northern</button>
          <button onClick={this.getSouth}>Get Most Southern</button>
        </div>

        { this.state.showModal ? <CitiesModal
          community = {community}
          cityID = { cityID }
          // modalFunction={ modalFunction }
          setModal = { this.handleModal }
        /> : "" }
      </div>
    )
  }
}

export default CitiesComp;
