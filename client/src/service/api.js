import axios from 'axios';
const API_URL = 'http://localhost:8000';
const axiosInstance = axios.create({
    baseUrl:API_URL,
    timeout: 10000,
    headers:{
        "content-type": "application/json"
    }

})

axiosInstance.interceptors.request.use(
    functoion(config){
        return config,
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(response));
    }
)