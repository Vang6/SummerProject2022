import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SignIn, Raise, SignOut, Registration, Issues, IssueUpdate } from './screens';
import { TokenManager } from './services';

const GenericScreenRenderer= (props) => {
    const authenticated= TokenManager.getToken();
    if(authenticated){
        return <>{props.component}</>    
    }
    else{
        window.location.href= '/';
    }
};

const AppRouter = function () {
    return (
        <div>

            <BrowserRouter>
            <div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/registration" className="nav-link">Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/raise" className="nav-link">Raise Issue</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/issues" className="nav-link">Issues</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signout" className="nav-link">Sign Out</Link>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<SignIn />} />

                    <Route path="/raise" element={<GenericScreenRenderer component={<Raise/>}/>} />

                    <Route path="/issueupdate" element={<GenericScreenRenderer component={<IssueUpdate/>}/>} />

                    <Route path="/issues" element={<GenericScreenRenderer component={<Issues/>}/>} />

                    <Route path="/signout" element={<SignOut />} />

                    <Route path="/registration" element={<Registration />} />
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;