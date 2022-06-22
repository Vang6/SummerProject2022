const Authentication = {
    signin: function () { },
    signout: function () { },
    registration: function (registrationURL, userFormData) {
        return fetch(registrationURL, {
            method: 'POST',
            body: JSON.stringify(userFormData)
        });
    }
}
export default Authentication;
