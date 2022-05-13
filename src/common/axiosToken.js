import axios from "axios";
import store from "../redux/store";


export const axiosApiInstance = axios.create({
    baseURL: 'http://localhost:3000' || process.env.BASEURL,
    withCredentials: true
});


axiosApiInstance.interceptors.request.use((config) => {
    // Do something before request is sent

    const token = store.getState().userInfo.userToken;

    if(token !== ''){
        // config.headers.userToken = "Bearer " + token;
        config.headers.userToken = token;
        console.log('aaaaaa', config.headers.userToken);
    }

    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Headers"] = "X-Requested-With";
    // config.withCredentials = true;

    return config;
}, (error) => {
    // Do something with Request error
    return Promise.reject(error);
});

axiosApiInstance.interceptors.response.use(undefined, (err) => {
    return Promise.reject(err);
})