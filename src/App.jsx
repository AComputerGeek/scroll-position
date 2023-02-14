// @author: Amir Armion
// @version: V.01

import PanelMouseLogger from "./PanelMouseLogger";
import PointMouseLogger from "./PointMouseLogger";
import './App.css';

function App() 
{
  return(
    <div className="App">
      <header className="Header">Scroller Position:</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
