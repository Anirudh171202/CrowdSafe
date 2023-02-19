import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React from 'react';

import RealTimePeopleCountGraph from '../StatisticDisplay/RealTimeGraph';

const Grid = ({ boundedVideo, heatMap }) => {
    
    return (
        <Col xl={9}>
            <Row style={{ width: '100%', paddingTop: '10px' }}>
                <video autoPlay muted style={{ width: '50%', padding: '0px' }}>
                    <source src={boundedVideo} type="video/mp4" />
                </video>
                <video autoPlay muted style={{ width: '50%', padding: '0px' }}>
                    <source src={heatMap} type="video/mp4" />
                </video>
            </Row>
            <Row>
               <RealTimePeopleCountGraph />
            </Row>
        </Col>
    )
}

export default Grid;