import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CityDisplay from './CityDisplay';
import AddCity from './AddCity';
import './cities.css';


class CitiesModal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'overlay';
    document.getElementById('citiesBody').appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.getElementById('citiesBody').removeChild(this.modalTarget);
  }

  _render() {
    ReactDOM.render(
      <div className='citiesModal'>
      { (this.props.modalFunction === "displayCity") ?
        <CityDisplay
          community = {this.props.community}
          cityID = {this.props.cityID}
          setModal = {this.props.setModal}
        /> : ""
      }
      { (this.props.modalFunction === "addCity") ?
        <AddCity
          setModal = {this.props.setModal}
          community = {this.props.community}
        /> : ""
      }
      </div>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />;
  }
}

export default CitiesModal;
