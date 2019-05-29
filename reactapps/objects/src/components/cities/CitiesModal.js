import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CityDisplay from './CityDisplay';
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
        <CityDisplay
          community = {this.props.community}
          cityID = {this.props.cityID}
          setModal = {this.props.setModal}
        />
      </div>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />;
  }
}

export default CitiesModal;
