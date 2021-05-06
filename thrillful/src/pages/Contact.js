import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Box, ColorModeProvider, Container, Form, FormControl, FormErrorMessage, Input, Textarea } from "@chakra-ui/react";



const Contact = () => {
    return (
        <Container>
            <Row>
                <FormControl id="firstName" isRequired>
                    <Col>
                        <Input placeholder="First Name" />
                    </Col>
                    </FormControl>
                    <FormControl id="lastName" isRequired>
                        <Col >
                            <Input placeholder="Last Name" />
                        </Col>
                    </FormControl>
            </Row>
            <Row>
            <FormControl id="phone" isRequired>
                <Col>
                    <Input placeholder="Phone Number" />
                </Col>
            </FormControl>
            <FormControl id="email" isRequired>
                <Col>
                    <Input placeholder="Email" />
                </Col>
            </FormControl>
            </Row>
            <FormControl id="subject" isRequired>
                <Col xs={12} md={6} lg={6}>
                    <Input placeholder="Subject" />
                </Col>
            </FormControl>
            <FormControl id="message" isRequired>
                <Col xs={12} md={6} lg={6}>
                    <Textarea placeholder="Write your message here" />
                </Col>
            </FormControl>
            <Col xs={12}>
                <Button variant="flat" style={{ background: "#ff0000" }} type="submit" variant="danger">Send</Button>
            </Col>
        </Container>

    )
}

export default Contact
