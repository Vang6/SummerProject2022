import TokenManager from './tokenmanager';
const HttpClient = {
    get: function (url) {
        const token = TokenManager.getToken();
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: [{ 'Content-type': 'application/json' },
                { 'Authorisation': `Bearer ${token}` }]
            }).then((responseObj) => {
                return responseObj.json();
            }).then((responseData) => {
                resolve(responseData);
            }).catch(() => {
                reject();
            })
        });
    },
    post: function (url, payload) {
        const token = TokenManager.getToken();
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                body: JSON.stringify(payload), 
                headers: [{ 'Content-type': 'application/json' },
                { 'Authorisation': `Bearer ${token}` }]
            }).then((responseObj) => {
                return responseObj.json();
            }).then((responseData) => {
                resolve(responseData);
            }).catch(() => {
                reject();
            })
        });
    }
}
export default HttpClient;
