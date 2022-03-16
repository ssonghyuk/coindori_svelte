import axios from "axios";

const send = async ({method='', path='', data={},} = {}) => {
    const commonUrl = 'http://211.37.179.175:10832/api';
    const url = commonUrl + path;
    const getToken = localStorage.getItem('authToken')
    const headers = {
        'Content-Type': 'application/json',
        'X-Auth-Token': getToken,
    }

    const options ={
        method,
        url,
        headers,
        data,
    }

    console.log(options)
    try {
        const response = await axios(options);
        return response.data;
    }
    catch (error){
        throw error;
    }
} 

const getApi = ({path='',} = {}) => {
    return send({method: 'GET', path });
}

const putApi = ({path='', data={}} = {}) => {
    return send({method: 'PUT', path, data });
}

const postApi = ({path='', data={}} = {}) => {
    return send({method: 'POST', path, data });
}

const delApi = ({path='', data={}} = {}) => {
    return send({method: 'DELETE', path, data });
}

export {
    getApi,
    putApi,
    postApi,
    delApi
}