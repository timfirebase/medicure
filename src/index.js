import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import {combineReducers,createStore,applyMiddleware} from 'redux';
import AuthReducer from "./store/reducers/AuthReducer";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from 'react-router-dom';
import {watchAdmins, watchAuth, watchDoctors, watchPatients} from "./store/sagas";
import PatientReducer from "./store/reducers/PatientReducer";
import DoctorReducer from "./store/reducers/DoctorReducer";
import AdminReducer from "./store/reducers/AdminReducer";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    authRdcr: AuthReducer,
    patientRdcr: PatientReducer,
    doctorRdcr: DoctorReducer,
    adminRdcr: AdminReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchPatients);
sagaMiddleware.run(watchDoctors);
sagaMiddleware.run(watchAdmins);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


