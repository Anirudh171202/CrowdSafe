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

import React, { useState } from 'react'

import './SideBar.css'

const SideBar = ({ peopleCount, starterLocation }) => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [z, setZ] = useState();
    const [numPeople, setNumPeople] = useState(peopleCount);
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    
    const [densityTolerance, setDensityTolerance] = useState(80);

    React.useEffect(() => {
        const getResponse = async () => {
            const response = await fetch(`http://localhost:5000/data?${starterLocation}:${peopleCount}`);
            let data = await response.json();
    
            if (data.message === 'success') {
                setX(data.latitude);
                setY(data.longitude);
                setZ(data.longitude);
                setNumPeople(data.peopleCount)
                setSecondsElapsed(secondsElapsed + 1)
            }
        } 
        
        getResponse()

    }, [numPeople, secondsElapsed, starterLocation, peopleCount])

    return (
        // TODO: Add increasing timer
        <Col>
            <CDBSidebar style={{backgroundColor: '#1A6391', width: 'auto'}}>
                <CDBSidebarHeader className='sidebar-header' style={{ padding: '5px 0px', borderBottom: '0.2px solid #7090C4' }}>
                    <h4 style={{ margin: '0px', padding: '0px'}}>
                        Overview
                    </h4>
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
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Hotbed Coordinates: {`X: ${x}, Y: ${y}, Z: ${z}`}</div>
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