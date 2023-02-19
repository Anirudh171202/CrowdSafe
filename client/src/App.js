import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route, BrowserRouter, Switch} from "react-router-dom";
import crowd1 from './components/Grid/final_output.mp4'
import crowd1_heatmap from './components/Grid/heatmap_video_boxes.mp4'
import lightsaber_battle from './components/Grid/lightsaber_battle.mp4'
import lightsaber_heatmap from './components/Grid/lightsaber_heatmap_full_speed.mp4'
import { useContext, useState} from 'react';
import CoordinateContext from './CoordinateContext';

import './App.css';

function App() {
  const [coordinateState, setCoordinateState] = useState([]);
  const [coordinates, setCoordinates] = useContext(CoordinateContext);

  const MyComponent = () => {
    
  }
  
  return (
    <CoordinateContext.Provider value={[coordinateState, setCoordinateState]}>
      <div className='app'>
          <Switch>
            <Route exact path="/lightsaber" render={() => {
              return <Dashboard boundedVideo={lightsaber_battle} heatMap={lightsaber_heatmap} peopleCount={54} starterLocation="4a5a28"/>
            }}/>

            <Route exact path="/" render={() => {
              return <Dashboard boundedVideo={crowd1} heatMap={crowd1_heatmap} peopleCount={300} starterLocation="45a31a72"/>
            }}/>

            <Route exact path="/crowd1" render={() => {
              return <Dashboard boundedVideo={crowd1} heatMap={crowd1_heatmap} peopleCount={300} starterLocation="45a31a72"/>
            }} />
            <Route exact path="/crowd2" render={() => {
              return <Dashboard boundedVideo={crowd1} heatMap={crowd1_heatmap} peopleCount={300} starterLocation="45a31a72"/>
            }} />
          </Switch>
      </div>
    </CoordinateContext.Provider>
  );
}

export default App;
