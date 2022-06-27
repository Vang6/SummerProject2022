const Authentication = {
    signin: function (signinURL, signinData) {
        return new Promise(function(resolve, reject){
            fetch(signinURL, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(signinData) 
            }).then((responseObj)=> {
                return responseObj.json();
            }).then((responseData)=> {
                resolve(responseData);

            }).catch(()=> {
                reject();
            })
        });
        
     },
    signout: function () { },
    registration: function (registrationURL, userFormData) {
        return fetch(registrationURL, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(userFormData) 
        });
    }
}
export default Authentication;
