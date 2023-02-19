import Col from 'react-bootstrap/Col';

import test from './test2.mp4'

const Grid = () => {
    return (
        <Col>
            <video autoPlay muted style={{ objectFit: 'cover', width: '100%'}}>
                <source src={test} type="video/mp4" />
            </video>
            <video autoPlay muted style={{ objectFit: 'cover', width: '100%' }}>
                <source src={test} type="video/mp4" />
            </video>
        </Col>
    )
}

export default Grid;