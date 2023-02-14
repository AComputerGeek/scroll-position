// @author: Amir Armion
// @version: V.01

import React from 'react';
import MousePosition from "./MousePosition";

function PanelMouseLogger() 
{
  return(
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition render={(mousePosition) => {
        return(
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        );
      }} />
    </div>
  );
}

export default PanelMouseLogger;
