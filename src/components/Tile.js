import React from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Tile =(props) => {
    return(
        <>
                <Card onClick={props.func}>
                    <Card.Body>
                            <img src={props.imgPath}/>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                        {props.text}
                    </Card.Footer>
                </Card>
        </>
    )
}
export default Tile;