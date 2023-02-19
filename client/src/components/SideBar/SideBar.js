import {
    CDBContainer,
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSlider
} from 'cdbreact';

import Button from 'react-bootstrap/Button';

import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';

import './SideBar.css'

const SideBar = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [numPeople, setNumPeople] = useState(null);
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    
    const [densityTolerance, setDensityTolerance] = useState(80);

    React.useEffect(() => {
        const getResponse = async () => {
            const response = await fetch(`http://localhost:5000/data`);
            let data = await response.json();
    
            if (data.message === 'success') {
                setLatitude(data.latitude);
                setLongitude(data.longitude);
                setNumPeople(data.peopleCount)
                setSecondsElapsed(secondsElapsed + 1)
            }
        }
        
        getResponse()

    }, [latitude, longitude, numPeople, secondsElapsed])

    return (
        <Col lg={4}>
            <CDBSidebar style={{backgroundColor: '#1A6391'}}>
                <CDBSidebarHeader className='sidebar-header' prefix={<i className="fa fa-bars fa-large"></i>}>
                    <h4 style={{margin: '0px'}}> Overview </h4>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content" >
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
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Hotbed Coordinates: {`${latitude}, ${longitude}`}</div>
                        </CDBContainer>
                        <CDBContainer>
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Density Tolerance (%):</div>
                            <h5 style={{ fontSize: '18px', fontWeight: '400'}}>A higher tolerance for density means that you will only see areas of dangerously high compaction, such as in a crowd.</h5>
                            <CDBSlider value={densityTolerance} tooltip="auto" step={10} setValue={setDensityTolerance} style={{ width: '100%' }} />
                        </CDBContainer>
                    </CDBSidebarMenu>
                    <Button style={{margin: '5px 99px'}} variant="danger">Alert</Button>{' '}
                </CDBSidebarContent>
            </CDBSidebar>
        </Col>
    )
}

export default SideBar;

// Followed documentation tutorial: https://www.devwares.com/blog/create-responsive-sidebar-in-react/