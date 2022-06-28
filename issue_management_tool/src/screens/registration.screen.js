import React from 'react';
import { Authentication, API_BOOK } from '../services';
const Registration = function () {
    const typeOfUsers = { USER: 'user', TECHNICIAN: 'technician' };
    const [state, setState] = React.useState({
        name: '',
        email: '',
        phone: 9211420100,
        username: '',
        password: '',
        typeOfUser: typeOfUsers.USER,
        valid: false
    })
    const checkValidity = (modfState) => {
        if (modfState.name && modfState.email && modfState.username && modfState.password && modfState.phone) {
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
            case 'registrationTypeOfUser':
                modfState = { ...state, ...{ typeOfUser: e.target.value } };
                modfState = checkValidity(modfState);
                setState(modfState);
                break;
            case 'registrationPhone':
                modfState = { ...state, ...{ phone: e.target.value } };
                modfState = checkValidity(modfState);
                setState(modfState);
                break;
            case 'registrationName':
                modfState = { ...state, ...{ name: e.target.value } };
                modfState = checkValidity(modfState);
                setState(modfState);
                break;
            case 'registrationUsername':
                modfState = { ...state, ...{ username: e.target.value } };
                modfState = checkValidity(modfState);
                setState(modfState);
                break;
            case 'registrationPassword':
                modfState = { ...state, ...{ password: e.target.value } };
                modfState = checkValidity(modfState);
                setState(modfState);
                break;
            case 'registrationEmail':
                modfState = { ...state, ...{ email: e.target.value } };
                modfState = checkValidity(modfState);
                setState(modfState);
                break;
            default: console.log('default');
        }

    }
    const register = () => {
        const obj = {
            username: state.username,
            phone: state.phone,
            email: state.email,
            password: state.password,
            name: state.name
        };
        Authentication.registration('http://localhost:7000/api/entry/register', obj);
    }
    return (
        <div>
            <div>
                <div className="registration-form">
                    <div className="form-group">
                        <h2>Registration</h2>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="form-group">
                                <label >Type of User</label>
                                <select className='form-control' onChange={commonHandler} value={state.typeOfUser} id="registrationTypeOfUser">
                                    <option value={typeOfUsers.USER}>Normal User</option>
                                    <option value={typeOfUsers.TECHNICIAN}>Technician</option></select>                        </div>
                            <div className="form-group">
                                <label >Username</label>
                                <input value={state.username} onChange={commonHandler} type="text" className="form-control" id="registrationUsername" aria-describedby="usernameHelp" />
                            </div>
                            <div className="form-group">
                                <label >Email address</label>
                                <input value={state.email} onChange={commonHandler} type="email" className="form-control" id="registrationEmail" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="form-group">
                                <label >Password</label>
                                <input value={state.password} onChange={commonHandler} type="password" className="form-control" id="registrationPassword" />
                            </div>
                            <div className="form-group">
                                <label >Phone</label>
                                <input value={state.phone} onChange={commonHandler} type="number" className="form-control" id="registrationPhone" aria-describedby="PhoneHelp" />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input value={state.name} onChange={commonHandler} type="text" className="form-control" id="registrationName" aria-describedby="nameHelp" />
                            </div>

                        </div>

                    </div>







                    <button onClick={register} disabled={!state.valid} type="register" className="btn btn-primary">Register</button>
                    <hr />
                </div>

            </div>
        </div>);
};
export default Registration;