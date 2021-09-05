import React, {useEffect, useState} from "react"
import {Form, Card, Button, Container} from 'react-bootstrap'
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import {Link,useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import UploadImage from "../UI/UploadImage/UploadImage";

const SignUp = (props) => {

    const history = useHistory();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [img,setImg] = useState();

    useEffect(() => {
        if( props.mode && "update" === props.mode && props.user) {
            setName(props.user.name);
            setEmail(props.user.email);
            setPassword(props.user.password);
            setPhone(props.user.phone);
            setImg(props.user.img);
        }
    },[]);

    const setProfileImg = (img) => {
        setImg(img);
    }

    if(props.isRegistered){
        Swal.close();
        history.push('/');
    }

    if(props.isUserUpdated){
        Swal.close();
        Swal.fire('Profile Updated!','','success');
        props.clearProfileUpdateStatus();
    }

    return(
        <>
            <Container className= "w-auto float-end">
                <Card>
                    <Card.Header><h2 className="text-center mb-2 mt-2">{props.label}!</h2></Card.Header>
                    <Card.Body className="p-3">
                        <div className="container">
                             <UploadImage setProfileImg={setProfileImg} placeholder={props.user ? props.user.img : ''} mode={props.mode}/>
                        </div>
                        <Form>
                            <Form.Group id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" required value={name} onChange={(event)=>{setName(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  required value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group id="phone">
                                <Form.Label>Contact No.</Form.Label>
                                <Form.Control type="number" required value={phone} onChange={(event)=>{setPhone(event.target.value)}}/>
                            </Form.Group>
                            <Button className="w-100 mt-4" type={"submit"}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        Swal.fire({
                                            title: 'Please wait...',
                                            html: '',
                                            allowEscapeKey: false,
                                            allowOutsideClick: false,
                                            didOpen: () => {
                                                Swal.showLoading()
                                            }
                                        });
                                        if("Signup" === props.mode) {
                                            props.onSubmit(name,email,password,phone,img,props.roleId)
                                        } else {
                                            props.onUpdateProfile(name,email,password,phone,img,props.roleId,props.user)
                                        }
                                    }}>
                                {props.label}
                            </Button>
                        </Form>
                    </Card.Body>
                    {"Signup" === props.mode ? (
                        <Card.Footer>
                            <div className="w-100 text-center mt-2">
                                Already have an account?
                                <Link to='/'><b>Log in!</b></Link>
                            </div>
                        </Card.Footer>
                        ) : ''
                    }
                </Card>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isRegistered: state.authRdcr.isRegistered,
        isUserUpdated: state.authRdcr.isUserUpdated
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (name,email,pswd,phone,img,role) => {
            const user = {
                name: name,
                email: email,
                password: pswd,
                phone: phone,
                img: img,
                role: role
            };
            dispatch(authActions.registerInit(user))
        },
        onUpdateProfile: (name,email,pswd,phone,img,role,currentUser) => {
            const user = {
                name: name,
                email: email,
                password: pswd,
                phone: phone,
                img: img,
                role: role,
                id: currentUser.id
            };
            if(email !== currentUser.email || pswd !== currentUser.password) {
                user.recreateUser = true;
            }
            if(img !== currentUser.img) {
                user.imgChanged = true;
            }
            dispatch(authActions.updateUserInit(user,currentUser))
        },
        clearProfileUpdateStatus: () => dispatch(authActions.clearProfileUpdateStatus())
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(SignUp);