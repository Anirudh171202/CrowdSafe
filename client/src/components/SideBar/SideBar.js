import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import './SideBar.css'

const SideBar = () => {
    return (
        // TODO: Add increasing timer
        <CDBSidebar style={{width: '20%'}}>
            <CDBSidebarHeader className='sidebar-header' >
                <h4 style={{margin: '0px'}}>
                    Overview
                </h4>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content" >
                <CDBSidebarMenu>
                    <CDBSidebarMenuItem style={{ marginBottom: '23px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Time Elapsed Since Alert:</div>
                        <h5 style={{ fontSize: '18px'}}>30s</h5>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem style={{ marginBottom: '23px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Number of People in Frame:</div>
                        <h5 style={{ fontSize: '18px'}}>45 people</h5>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem style={{ marginBottom: '23px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '18px'}}>Coordinates:</div>
                        <h5 style={{ fontSize: '18px'}}>37.4277938, -122.1765526</h5>
                    </CDBSidebarMenuItem>
                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    )
}

export default SideBar