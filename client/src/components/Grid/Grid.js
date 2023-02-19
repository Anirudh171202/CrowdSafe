import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { useContext } from 'react';
import { ScatterChart, Scatter, XAxis, 
    YAxis, CartesianGrid } from 'recharts';

import CoordinateContext from '../../CoordinateContext';

const Grid = ({ boundedVideo, heatMap }) => {
    const [coordinates, setCoordinates] = useContext(CoordinateContext);

    React.useEffect(() => {
        setCoordinates(coordinates);
    }, [coordinates])
    
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
                <ScatterChart width={400} height={400}>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" />
                    <YAxis type="number" dataKey="y" />
                    <Scatter data={coordinates} fill="green" />
                </ScatterChart>
            </Row>
        </Col>
    )
}

export default Grid;