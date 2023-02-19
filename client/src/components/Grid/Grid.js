import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Grid = () => {
    return (
        <Col style={{margin: '0px', paddingR: '20px'}} lg={8}>
            <Col><video controls style={{ objectFit: 'cover', width: '100%'}}>
                <source src="test.mp4" type="video/mp4" />
            </video></Col>
            <Col><video controls style={{ objectFit: 'cover', width: '100%' }}>
                <source src="test.mp4" type="video/mp4" />
            </video></Col>
        </Col>
    )
}

export default Grid;