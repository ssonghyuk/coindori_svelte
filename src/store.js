import { writable, get } from 'svelte/store';
import { getApi, putApi, delApi, postApi } from './service/api'
import { router } from 'tinro';

// export const auth = setAuth();
// export const authToken = setAuthToken();

function setAuth() {
    let initValues = {
        seqidx: '',
        nickname: '',
    }

    let values = {...initValues}
    const { subscribe, set, update } = writable(values);
    const isLogin = async () => {
        try {
            const getUserInfo = await getApi({path: '/user'});
            console.log(getUserInfo);
            set(getUserInfo);
        }
        catch(error) {
            auth.resetUserInfo();
            authToken.resetAuthToken();
        }
    }

    const resetUserInfo = () => {
        const newValues = {...initValues}
        set(newValues);
    }

    const register = async (id, pw) => {
        try {
            const options = {
                path: '/users',
                data: {
                    id: id,
                    pw: pw,
                }
            }

            await postApi(options);
            alert('가입이 완료되었습니다.');
            router.goto('/login');
        }
        catch(error){
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
    }

    return {
        subscribe,
        isLogin,
        resetUserInfo,
        register,
    }
    
}
function setAuthToken() {
    const token = localStorage.getItem('authToken');
    const { subscribe, set } = writable(token);

    const login = async (id, pw) => {
        try {
            const options = {
                path: '/login2',
                data:{
                    id: id,
                    pw: pw,
                }
            }
            
            console.log('login : ', login);
            const response = await postApi(options);
            const token = response.Authorization;
            console.log('authToken : ', token)
            localStorage.setItem('authToken', token);
            set(token);
            router.goto('/');
        }
        catch(error){
            console.log(error);
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
    }

    const logout = async () => {
        try { 
            const options = {
                path: '/logout'
            }
            await postApi(options);
            authToken.resetAuthToken();
        }
        catch(error){
            alert('오류가 발생했습니다. 다시 시도해 주세요.');
        }
    }

    const resetAuthToken = () => {
        set('');
        localStorage.removeItem('authToken');
    }

    return {
        subscribe,
        login,
        logout,
        resetAuthToken
    }
}

export const uid = writable(0);
export const name = writable("");

export const auth = setAuth();
export const authToken = setAuthToken();