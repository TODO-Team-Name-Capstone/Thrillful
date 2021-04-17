import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Input, Textarea } from "@chakra-ui/react"



const Contact = () => {
    return (
        <Container>
            <Row>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />


                <Input placeholder="Email" />
                <Input placeholder="Phone Number" />

                <Input placeholder="Subject" />

                <Textarea placeholder="Write your message here" />
            </Row>
        </Container>




    )
}

export default Contact
