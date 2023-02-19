import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route, BrowserRouter, Switch} from "react-router-dom";
import final_ouput from './videos/final_output.mp4'
import final_ouput_heatmap from './videos/heatmap_video_boxes.mp4'
import lightsaber_battle from './videos/lightsaber_battle.mp4'
import lightsaber_heatmap from './videos/lightsaber_heatmap_full_speed.mp4'
import drone from './videos/drone_shot_final.mp4'
import drone_heatmap from './videos/drone_shot_heatmap_speed.mp4'

import { useContext } from 'react';
import DensityContext from './DensityContext';

import './App.css';

function App() {
  const [densityState, setDensityState] = useContext(DensityContext);
  
  return (
    <DensityContext.Provider value={[densityState, setDensityState]}>
      <div className='app'>
          <Switch>
            <Route exact path="/lightsaber" render={() => {
              return <Dashboard boundedVideo={lightsaber_battle} heatMap={lightsaber_heatmap} peopleCount={54} starterLocation="4a5a28"/>
            }}/>

            <Route exact path="/" render={() => {
              return <Dashboard boundedVideo={final_ouput} heatMap={final_ouput_heatmap} peopleCount={300} starterLocation="45a31a72"/>
            }}/>

            <Route exact path="/drone" render={() => {
              return <Dashboard boundedVideo={drone} heatMap={drone_heatmap} peopleCount={300} starterLocation="45a31a72"/>
            }} />
          </Switch>
      </div>
    </DensityContext.Provider>
  );
}

export default App;
