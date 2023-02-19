import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React from 'react';

import RealTimePeopleCountGraph from '../StatisticDisplay/RealTimeGraph';

const Grid = ({ boundedVideo, heatMap }) => {
    
    return (
        <Col xl={9} style={{ width: '60%', paddingTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <video autoPlay muted style={{ width: '68%', padding: '0px', marginBottom: '10px' }}>
                <source src={boundedVideo} type="video/mp4" />
            </video>
            <video autoPlay muted style={{ width: '68%', padding: '0px' }}>
                <source src={heatMap} type="video/mp4" />
            </video>
            {/* <Row>
               <RealTimePeopleCountGraph />
            </Row> */}
        </Col>
    )
}

export default Grid;