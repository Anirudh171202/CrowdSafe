import {
    CDBContainer,
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSlider
} from 'cdbreact';

import { useState } from 'react'

import './SideBar.css'

const SideBar = () => {
    const [densityTolerance, setDensityTolerance] = useState(80);

    return (
        // TODO: Add increasing timer
        <CDBSidebar style={{width: '20%'}}>
            <CDBSidebarHeader className='sidebar-header' prefix={<i className="fa fa-bars fa-large"></i>}>
                <h4 style={{margin: '0px'}}>
                    Overview
                </h4>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content" >
                <CDBSidebarMenu style={{ padding: '24px' }}>
                    <CDBContainer style={{ marginBottom: '23px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Time Elapsed Since Alert:</div>
                        <h5 style={{ fontSize: '18px'}}>30s</h5>
                    </CDBContainer>
                    <CDBContainer style={{ marginBottom: '23px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Number of People in Frame:</div>
                        <h5 style={{ fontSize: '18px'}}>45 people</h5>
                    </CDBContainer>
                    <CDBContainer style={{ marginBottom: '50px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Coordinates:</div>
                        <h5 style={{ fontSize: '18px'}}>37.4277938, -122.1765526</h5>
                    </CDBContainer>
                    <CDBContainer>
                        <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Density Tolerance (%):</div>
                        <h5 style={{ fontSize: '18px'}}>A higher tolerance for density means that you will only see areas of dangerously high compaction, such as in a crowd.</h5>
                        <CDBSlider value={densityTolerance} tooltip="auto" step={10} setValue={setDensityTolerance} style={{ width: '100%' }} />
                    </CDBContainer>
                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    )
}

export default SideBar

// Followed documentation tutorial: https://www.devwares.com/blog/create-responsive-sidebar-in-react/