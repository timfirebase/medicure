import React, {useEffect, useState} from "react"
import {Form, Card, Button, Container} from 'react-bootstrap'
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import {Link,useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import UploadImage from "../UI/UploadImage/UploadImage";
import {useFormik} from "formik";
import * as Yup from "yup";

const SignUp = (props) => {

    const history = useHistory();

    const [img,setImg] = useState(null);

    useEffect(() => {
        if( props.mode && "update" === props.mode && props.user) {
            setImg(props.user.img);
        }
    },[]);

    let initValues = {
        email: '',
        password: '',
        name: '',
        phone: '',
        img: null
    }

    if( props.mode && "update" === props.mode && props.user) {
        initValues = {
            email: props.user.email,
            password: props.user.password,
            name: props.user.name,
            phone: props.user.phone,
            img: props.user.img
        }
    }

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: initValues,
        validationSchema: Yup.object({
            email: Yup.string().max(20, 'Email must be shorter than 10 characters').required().email(),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
            name: Yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
            phone: Yup.number().required()
        }),
        onSubmit: ({name,email, password,phone}) => {
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
        }
    });

    const setProfileImg = (img) => {
        setImg(img);
    }

    if(props.isRegistered){
        Swal.close();
        history.push('/');
    }

    useEffect(()=> {
        if(props.isNotRegistered){
            Swal.close();
            Swal.fire(props.error.message,'','error');
            props.clearIsNotRegisteredStatus();
        }
    },[props.isNotRegistered])

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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"
                                              value={values.name}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              id="name"/>
                                {touched.name && errors.name ? (
                                    <div className="text-danger h6 pt-2 pb-2">{errors.name}</div>
                                ): null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"
                                              value={values.email}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              id="email"/>
                                {touched.email && errors.email ? (
                                    <div className="text-danger h6 pt-2 pb-2">{errors.email}</div>
                                ): null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                              value={values.password}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              id="password"/>
                                {touched.password && errors.password ? (
                                    <div className="text-danger h6 pt-2 pb-2">{errors.password}</div>
                                ): null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contact No.</Form.Label>
                                <Form.Control type="number"
                                              value={values.phone}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              id="phone"/>
                                {touched.phone && errors.phone ? (
                                    <div className="text-danger h6 pt-2 pb-2">{errors.phone}</div>
                                ): null}
                            </Form.Group>
                            <Button className="w-100 mt-4" type={"submit"}>
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
        isNotRegistered: state.authRdcr.isNotRegistered,
        error: state.authRdcr.error,
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
            dispatch(authActions.registerInit(user,"patient"))
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
        clearProfileUpdateStatus: () => dispatch(authActions.clearProfileUpdateStatus()),
        clearIsNotRegisteredStatus:() => dispatch(authActions.clearIsNotRegisteredStatus())
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(SignUp);