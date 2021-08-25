import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import {combineReducers,createStore,applyMiddleware} from 'redux';
import AuthReducer from "./store/reducers/AuthReducer";
import thunk from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';


const rootReducer = combineReducers({
    authRdcr: AuthReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

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

