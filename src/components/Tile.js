import React from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Tile = () => {
    return(
        <>
            <Container className= "w-auto float">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Welcome Patient!</h2>
                        <Form className="float-start">
                            <Button className="mt-4 float-start"  type={"button"}>
                                Sign Up
                            </Button>
                        </Form>
                        <Form className="align-items-center">
                            <Button className="mt-4" type={"button"}>
                                Sign Up
                            </Button>
                        </Form>
                        <Form className="float-end">
                            <Button className="mt-4" type={"button"}>
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
export default Tile;