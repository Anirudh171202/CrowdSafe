import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import final_output from './final_output.mp4';
import heatmap_video_boxes from './heatmap_video_boxes.mp4';

const Grid = () => {
    return (
        <Col>
            <Card style={{margin: "30px 8%"}}>
                <Card.Body>
                    <video autoPlay muted style={{ objectFit: 'cover', width: '100%'}}>
                        <source src={heatmap_video_boxes} type="video/mp4" />
                    </video>
                </Card.Body>
            </Card>
            <Card style={{margin: "30px 8%"}}>
                <Card.Body>
                    <video autoPlay muted style={{ objectFit: 'cover', width: '100%'}}>
                        <source src={heatmap_video_boxes} type="video/mp4" />
                    </video>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Grid;