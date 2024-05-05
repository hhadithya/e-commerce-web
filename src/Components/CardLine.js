import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Stylesheets/CardLine.css';

const CardLine = () => {
    return (
        <Container fluid>
            <h2 className="text-center" style={{letterSpacing:'1.1rem', fontWeight: '600', padding: '5% 0 3.5% 0', color: '#151515'}}>PICK THE BEST</h2>
            <Row>
                <Col xs={6} md={3}>
                    <Card className='imgCard'>
                        <Card.Img src="/Images/top4.webp" alt="Tops" />
                        <Card.ImgOverlay style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                            <Card.Title className='title'>Tops</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={6} md={3}>
                    <Card className='imgCard'>
                        <Card.Img src="/Images/pant.webp" alt="Pants" />
                        <Card.ImgOverlay style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                            <Card.Title className='title'>Pants</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={6} md={3}>
                    <Card className='imgCard'>
                        <Card.Img src="/Images/bottom.jpg" alt="Bottoms" />
                        <Card.ImgOverlay style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                            <Card.Title className='title'>Bottoms</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={6} md={3}>
                    <Card className='imgCard'>
                        <Card.Img src="/Images/new.webp" alt="Bottoms" />
                        <Card.ImgOverlay style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                            <Card.Title className='title'>New Fits</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CardLine;