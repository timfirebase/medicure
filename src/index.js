import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import {combineReducers,createStore,applyMiddleware} from 'redux';
import AuthReducer from "./store/reducers/AuthReducer";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from 'react-router-dom';
import {watchAuth, watchDoctors, watchPatients} from "./store/sagas";
import PatientReducer from "./store/reducers/PatientReducer";
import DoctorReducer from "./store/reducers/DoctorReducer";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    authRdcr: AuthReducer,
    patientRdcr: PatientReducer,
    doctorRdcr: DoctorReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchPatients);
sagaMiddleware.run(watchDoctors);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


