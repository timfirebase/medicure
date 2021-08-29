import React , {useState} from "react"
import {Form, Card, Button, Container} from 'react-bootstrap'
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import {Link,useHistory} from "react-router-dom";

const SignUp = (props) => {
    const history = useHistory();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();

    if(props.isRegistered){
        history.push('/');
    }

    return(
        <>
            <Container className= "w-auto float-end">
                <Card>
                    <Card.Body className="p-3">
                        <h2 className="text-center mb-4">Sign up!</h2>
                        <Form>
                            <Form.Group id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" required onChange={(event)=>{setName(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required onChange={(event)=>{setEmail(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  required onChange={(event)=>{setPassword(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group id="phone">
                                <Form.Label>Contact No.</Form.Label>
                                <Form.Control type="number" required onChange={(event)=>{setPhone(event.target.value)}}/>
                            </Form.Group>
                            <Button className="w-100 mt-4" type={"submit"}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        props.onSubmit(name,email,password,phone,props.roleId)}
                                    }>
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <div className="w-100 text-center mt-2">
                            Already have an account?
                            <Link to='/'><b>Log in!</b></Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isRegistered: state.authRdcr.isRegistered
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (name,email,pswd,phone,role) => {
            const user = {
                name: name,
                email: email,
                password: pswd,
                phone: phone,
                role: role
            };
            dispatch(authActions.registerInit(user))
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(SignUp);