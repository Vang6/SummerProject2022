import Cookies from 'js-cookie';
const TokenManager = {
    setToken: function (token) {
        /*this.token= token;*/
        Cookies.set('auth-token', token, { expires: 1 })
    },
    getToken: function () {
        return Cookies.get('auth-token');
    }

}
export default TokenManager;
