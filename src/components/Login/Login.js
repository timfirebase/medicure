import React, {useEffect} from "react";
import {Form, Card, Button, Container} from 'react-bootstrap';
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import {Link, useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import {useFormik} from 'formik'
import * as Yup from 'yup'

const Login = (props) => {

    const history = useHistory();

    useEffect(()=> {
        if(props.loginError){
            Swal.close();
            Swal.fire(props.error.message,'','error');
            props.clearLoginError();
        }
    },[props.loginError])

    if(props.user){
        Swal.close();
        const role = props.user.role;
        if("patient" === role) {
            history.push('/patientHome');
        }
        else if ("admin" === role){
            history.push('/adminHome');
        }
        else if ("doctor" === role){
            history.push('/doctorHome');
        }
    }
    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().max(50, 'Email must be shorter than 50 characters').required().email(),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
        }),
        onSubmit: ({email, password}) => {
            Swal.fire({
                title: 'Please wait...',
                html: '',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            props.onSubmit(email, password)
        }
    });

    return(
        <>
            <Container className= "w-auto float-end">
                <Card>
                   <Card.Body className="p-4">
                        <h2 className="text-center mb-4">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"
                                              value={values.email}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              id="email"
                                              className={touched.email && errors.email && "border-danger"}
                                />
                                {touched.email && errors.email ? (
                                    <div className="text-danger h6 pt-3 pb-3">{errors.email}</div>
                                ): null}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                              value={values.password}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              id="password"
                                              className={touched.password && errors.password  && "border-danger"}
                                />
                                {touched.password && errors.password ? (
                                    <div className="text-danger h6 pt-3 pb-3">{errors.password}</div>
                                ): null}
                            </Form.Group>
                            <Button className="w-100 mt-4" type={"submit"}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <div className="w-100 text-center mt-2">
                            Create an account?
                            <Link to='/signup'><b>Sign Up!</b></Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.authRdcr.user,
        loginError: state.authRdcr.loginError,
        error: state.authRdcr.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (email,pswd) => {
            const user = {
                email: email,
                password: pswd
            }
            dispatch(authActions.loginInit(user));
        },
        clearLoginError: () => dispatch(authActions.clearLoginErrorStatus())
    }
};





export default connect (mapStateToProps, mapDispatchToProps)(Login);