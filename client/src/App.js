import './App.css';
import Grid from './components/Grid/Grid';
import SideBar from './components/SideBar/SideBar';
import RealTimePeopleCountGraph from './components/StatisticDisplay/RealTimeGraph';

function App() {
  return (
    <div className='app'>
      <SideBar />
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <Grid />
        {/* <RealTimePeopleCountGraph /> */}
      </div>
    </div>
  );
}

export default App;
