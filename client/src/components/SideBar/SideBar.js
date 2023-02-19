import {
    CDBContainer,
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSlider
} from 'cdbreact';

import Button from 'react-bootstrap/Button';

import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';

import './SideBar.css'

const SideBar = () => {
    const coordinates = [];
    const [densityTolerance, setDensityTolerance] = useState(80);

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
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Time Elapsed Since Alert:</div>
                            <h5 style={{ fontSize: '18px', fontWeight: '400'}}>30s</h5>
                        </CDBContainer>
                        <CDBContainer style={{ marginBottom: '23px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Number of People in Frame:</div>
                            <h5 style={{ fontSize: '18px', fontWeight: '400'}}>45 people</h5>
                        </CDBContainer>
                        <CDBContainer style={{ marginBottom: '50px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Hotbed Coordinates:</div>
                            {
                                coordinates.map((coordinate) => {
                                    return (<h5 style={{ fontSize: '18px', fontWeight: '400'}}>{coordinate}</h5>)
                                })
                            }
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