import React from 'react';
import { Link } from 'react-router-dom';
import { Authentication, TokenManager } from '../services';
const SignIn = function () {
    const [errmsg, setErrMsg]= React.useState('');
    const [state, setState] = React.useState({
        username: '',
        password: '',
        valid: false,
        error: null
    })
    const checkValidity = (modfState) => {
        if (modfState.username && modfState.password) {
            console.log('valid');
            modfState.valid = true;
        }
        else {
            modfState.valid = false;
        }
        return modfState;
    };
    const commonHandler = (e) => {
        let modfState = {};
        switch (e.target.id) {
            case 'signinUsername':
                modfState = { ...state, ...{ username: e.target.value } };
                modfState = checkValidity(modfState);
                setState(modfState);
                break;
            case 'signinPassword':
                modfState = { ...state, ...{ password: e.target.value } };
                modfState = checkValidity(modfState);
                setState(modfState);
                break;
        }
    }
    const signin = (e) => {
        e.preventDefault();
        const loginObject = { username: state.username, password: state.password };
        Authentication.signin('http://localhost:7000/api/entry/login', loginObject).then(function (responseObj) {
            if(responseObj.status){
                TokenManager.setToken(responseObj.data.token);
            }
            else{
                setErrMsg('Login Failed');
            }
        })
    };
    return (
        <div>
            <div className="login-form">
                <span className="batch text-danger">{errmsg}</span>
                <form onSubmit={signin}>
                    <div className="form-group">
                        <h2>Login</h2>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input onChange={commonHandler} type="text" className="form-control" id="signinUsername" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={commonHandler} type="password" className="form-control" id="signinPassword" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Technician</label>
                    </div>
                    <button disabled={!state.valid} type="submit" className="btn btn-primary">Submit</button>
                    <hr />
                    <Link to="/registration">Registration</Link>
                </form>
            </div>

        </div>)
};
export default SignIn;
//npm install react-router-dom@6 --save
