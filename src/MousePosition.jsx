// @author: Amir Armion
// @version: V.01

import { useState, useEffect } from 'react';

function MousePosition({ render }) 
{
  const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });
  
  useEffect(() => {

    const handleMousePositionChange = (e) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
  
    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);
  
  return render(mousePosition);
};

export default MousePosition;
    