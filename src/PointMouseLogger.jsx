// @author: Amir Armion
// @version: V.01

import React from 'react';
import MousePosition from "./MousePosition";

function PointMouseLogger() 
{
  return(
      <MousePosition render={(mousePosition) => {
        return(<p>({mousePosition.x} , {mousePosition.y})</p>);
      }} />
  );
}

export default PointMouseLogger;
