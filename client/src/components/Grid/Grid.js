import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import final_output from './final_output.mp4';
import heatmap_video_boxes from './heatmap_video_boxes.mp4';

const Grid = () => {
    return (
        <Col xl={9}>
            <Row style={{ width: '100%', paddingTop: '10px' }}>
                    <video autoPlay muted style={{ width: '50%', padding: '0px' }}>
                        <source src={heatmap_video_boxes} type="video/mp4" />
                    </video>
                    <video autoPlay muted style={{ width: '50%', padding: '0px' }}>
                        <source src={heatmap_video_boxes} type="video/mp4" />
                    </video>
            </Row>
        </Col>
    )
}

export default Grid;