import React from 'react';

const WebIcons = ({id, iconState, buttonClick}) => {
    return(
      <div>
        <i
          className="fab fa-wolf-pack-battalion"
          id="wolf"
          //value={ iconState.wolf }
          onClick={ buttonClick }
          >
        </i>
        <i
          className="fab fa-phoenix-squadron"
          id="phoenix"
          //value={ iconState.phoenix }
          onClick={ buttonClick }
          >
        </i>
        <i
          className="fab fa-studiovinari"
          id="faerie"
          //value={ iconState.faerie }
          onClick={ buttonClick }
          >
        </i>
        <i
          className="fab fa-gitkraken"
          id="kraken"
          //value={ iconState.kraken }
          onClick={ buttonClick }
          >
        </i>
        <br />

      </div>
    );
  }

export default WebIcons;
