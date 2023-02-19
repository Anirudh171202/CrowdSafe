import {
    CDBContainer,
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSlider
} from 'cdbreact';

import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';

import './SideBar.css'

const SideBar = () => {
    const coordinates = [];
    const [densityTolerance, setDensityTolerance] = useState(80);

    return (
        // TODO: Add increasing timer
        <Col  lg={4} >
            <CDBSidebar>
                <CDBSidebarHeader className='sidebar-header' prefix={<i className="fa fa-bars fa-large"></i>}>
                    <h4 style={{margin: '0px'}}>
                        Overview
                    </h4>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content" >
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
                            <CDBSlider value={densityTolerance} tooltip="auto" step={10} setValue={setDensityTolerance} style={{ width: '100%' }} />
                        </CDBContainer>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </Col>
    )
}

export default SideBar;

// Followed documentation tutorial: https://www.devwares.com/blog/create-responsive-sidebar-in-react/