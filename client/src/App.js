import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import crowd1 from './videos/final_output.mp4'
import crowd1_heatmap from './videos/heatmap_video_boxes.mp4'
import lightsaber_battle from './videos/lightsaber_battle.mp4'
import lightsaber_heatmap from './videos/lightsaber_heatmap_full_speed.mp4'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
        <Routes>
          <Route exact path="/" element={<Dashboard boundedVideo={crowd1} heatMap={crowd1_heatmap}
                                    peopleCount={300} starterLocation="45:31:72"
                                    />} />
          <Route exact path="/lightsaber" element={<Dashboard 
                                              boundedVideo={lightsaber_battle} heatMap={lightsaber_heatmap}
                                              peopleCount={54} starterLocation="4:5:28"
                                            />} />
          <Route path="/crowd1" element={<Dashboard />} />
          <Route path="/crowd2" element={<Dashboard />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
