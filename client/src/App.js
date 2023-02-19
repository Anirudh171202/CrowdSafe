import Container from 'react-bootstrap/esm/Container';
import './App.css';
import Grid from './components/Grid/Grid';
import SideBar from './components/SideBar/SideBar';
import BasicExample from './components/Navbar';
import Row from 'react-bootstrap/esm/Row';

function App() {
  return (
    <div className='app'>
      <Container fluid style={{ padding: '0px', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
        <BasicExample></BasicExample>
        <Row style={{maxHeight: '100%', display: 'flex', flex: '1 1'}}>
          <SideBar lg={6}/>
          <Grid/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
