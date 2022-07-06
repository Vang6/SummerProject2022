import TokenManager from './tokenmanager';
const HttpClient = {
    get: function (url) {
        const token = TokenManager.getToken();
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorisation': `Bearer ${token}`
                }
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
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json',
                    'Authorisation': `Bearer ${token}`
                }
            }).then((responseObj) => {
                console.log('1-then', responseObj);
                return responseObj.json();
            }).then((responseData) => {
                console.log('2-then', responseData);
                resolve(responseData);
            }).catch((error) => {
                reject(error);
            })
        });
    }
}
export default HttpClient;