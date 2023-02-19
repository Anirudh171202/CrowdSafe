import Grid from '../Grid/Grid';
import SideBar from '../SideBar/SideBar';
import StyledNavbar from '../Navbar';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Dashboard = ({ boundedVideo, heatMap, peopleCount, starterLocation }) => {
    return <Container fluid style={{ padding: '0px', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <StyledNavbar />
        <Row style={{maxHeight: '100%', display: 'flex', flex: '1 1', backgroundColor: '#f5f5f5'}}>
            <SideBar peopleCount={peopleCount} starterLocation={starterLocation} lg={6}/>
            <Grid boundedVideo={boundedVideo} heatMap={heatMap} />
        </Row>
    </Container>
}

export default Dashboard;