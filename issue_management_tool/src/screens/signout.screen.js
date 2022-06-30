import React from 'react';
import { TokenManager } from '../services';
const SignOut= function(){
    TokenManager.setToken(null);
    window.location.href= '/';
    return(
    <div>
     Sign Out Page
    </div> );
};
export default SignOut;