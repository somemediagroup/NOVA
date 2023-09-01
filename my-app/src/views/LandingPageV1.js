import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/views/LandingPageV1.css';
import Logo from '../components/LandingPageV1/Logo';
import GetStartedButton from '../components/LandingPageV1/GetStartedButton';



const LandingPageV1 = () => {
    return (
        <Container fluid className="full-screen bg-primary" id="landingPageV1">
            <Row className="h-100 justify-content-center align-items-center">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Card className="text-center p-5 rounded mx-auto" style={{ height: '80vh' }}>                        <Card.Body>
                            <Card.Title>
                                <Logo />
                            </Card.Title>
                            <Card.Text>
                                <GetStartedButton />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LandingPageV1;
