import {
    CDBContainer,
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSlider
} from 'cdbreact';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import React, { useState, useContext } from 'react';

import './SideBar.css'
import DensityContext from '../../DensityContext';

const SideBar = ({ peopleCount, starterLocation }) => {
    
    const vals = starterLocation.split("a");
    
    const [x, setX] = useState(vals[0]);
    const [y, setY] = useState(vals[1]);
    const [z, setZ] = useState(vals[2]);
    const [numPeople, setNumPeople] = useState(peopleCount);
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    const [density, setDensity] = useContext(DensityContext);
    
    const [densityTolerance, setDensityTolerance] = useState(80);

    React.useEffect(() => {
        const getResponse = async () => {
            const response = await fetch(`http://localhost:5000/data?vals=${x}a${y}a${z}a${peopleCount}`);
            let data = await response.json();
    
            if (data.message === 'success') {
                console.log(data.data);
                setX(data.data.x);
                setY(data.data.y);
                setZ(data.data.z);
                setNumPeople(data.data.peopleCount)
                setSecondsElapsed(secondsElapsed + 1)

                // if(density['count'] !== undefined){
                //     density['time'].push(secondsElapsed)
                //     density['count'].push(numPeople)
                //     setDensity(density)
                // }
            }
        } 
        
        setTimeout(() => {
            getResponse()
        }, 1000)
        // , density
    }, [numPeople, secondsElapsed, x, y, z])

    return (
        <Col>
            <CDBSidebar style={{backgroundColor: '#1A6391', width: 'auto'}}>
                <CDBSidebarHeader className='sidebar-header' style={{ padding: '5px 0px', borderBottom: '0.2px solid #7090C4' }}>
                    <h4 style={{ margin: '0px', padding: '0px'}}> Overview </h4>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content" style={{ paddingTop: '0px', display: 'flex', justifyContent: 'center'}}>
                    <CDBSidebarMenu style={{ padding: '24px' }}>
                        <CDBContainer style={{ marginBottom: '23px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Time (Seconds) Elapsed Since Detection:</div>
                            <h5 style={{ fontSize: '18px', fontWeight: '400'}}>{secondsElapsed}</h5>
                        </CDBContainer>
                        <CDBContainer style={{ marginBottom: '23px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Number of People in Frame:</div>
                            <h5 style={{ fontSize: '18px', fontWeight: '400'}}>{numPeople} people</h5>
                        </CDBContainer>
                        <CDBContainer style={{ marginBottom: '50px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Hotbed Coordinates: <br></br>{`X: ${x}, Y: ${y}, Z: ${z}`}</div>
                        </CDBContainer>
                        <CDBContainer>
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Density Tolerance (%):</div>
                            <h5 style={{ fontSize: '18px', fontWeight: '400'}}>A higher tolerance for density means that you will only see areas of dangerously high compaction, such as in a crowd.</h5>
                            <CDBSlider value={densityTolerance} tooltip="auto" step={10} setValue={setDensityTolerance} style={{ width: '100%', marginTop: '10px' }} />
                        </CDBContainer>
                    </CDBSidebarMenu>
                    <Button style={{ position: 'fixed', bottom: '40px', width: '20%'}} variant="danger">Alert</Button>{' '}
                </CDBSidebarContent>
            </CDBSidebar>
        </Col>
    )
}

export default SideBar;

// Followed documentation tutorial: https://www.devwares.com/blog/create-responsive-sidebar-in-react/