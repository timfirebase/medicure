import React , {useState} from "react"
import {Form, Card, Button, Container} from 'react-bootstrap'
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';


const ManageAdmins = (props) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();

    let homeRoute = '';
    let msg = '';


    debugger;
    if(props.isRegistered){
            msg = (<span className={"p-3 mb-2 mt-4 bg-success text-white"}> "Admin has been registered successfully!"</span>);
            setTimeout(() => {
                msg = (<span> ""</span>);
            }, 3000);
    }
    else{
            msg = (<span className={"bg-fail text-white pt-2 h6 width:25%"}> "Admin has been not been registered"</span>);
    }

    return(
        <>
            {homeRoute}
            <Container className= "w-auto">
                <Card  className="w-75">
                    <Card.Body>
                        <h2 className="text-center mb-4">Manage Admins</h2>
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
                            <Button className="w-100 mt-4" type={"button"} onClick={() => props.onSubmit(name,email,password,phone,"admin")}>
                                Add Admin
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <div className={"p-4 border-radius: 8px"}>
                    {msg}
                </div>
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

export default connect (mapStateToProps, mapDispatchToProps)(ManageAdmins);