import React from 'react';
import {Link} from 'react-router-dom';
const SignIn= function(){
    return(
    <div>
             <div className="login-form">
            <form>
                <div className="form-group">
                    <h2>Login</h2>
                    </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Technician</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <hr/>
                <Link to="/registration">Registration</Link>
            </form>
        </div>

    </div> );
};
export default SignIn;
//npm install react-router-dom@6 --save
