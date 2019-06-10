import React from 'react';

const WebIcons = ({id, iconState, buttonClick}) => {
    return(
      <div className="App-header">
        <i
          id="wolf"
          className={`fab fa-wolf-pack-battalion ${( (iconState ==="wolf") ? "fabActive" : "" )}`}
          onClick={ buttonClick }
          >
        </i>
        <i
          id="phoenix"
          className={`fab fa-phoenix-squadron ${( (iconState==="phoenix") ? "fabActive" : "" )}`}
          onClick={ buttonClick }
          >
        </i>
        <i
          id="faerie"
          className={`fab fa-studiovinari ${( (iconState==="faerie") ? "fabActive" : "" )}`}
          onClick={ buttonClick }
          >
        </i>
        <i
          id="kraken"
          className={`fab fa-gitkraken ${( (iconState==="kraken") ? "fabActive" : "" )}`}
          onClick={ buttonClick }
          >
        </i>
        <i
          id="dragon"
          className={`fab fa-d-and-d ${( (iconState==="dragon") ? "fabActive" : "" )}`}
          onClick={ buttonClick }
          >
        </i>
        <br />

      </div>
    );
  }

export default WebIcons;
