import axios from "axios";
import configureStore from "../components/redux/index";
const { store } = configureStore();

export const ApiCall = async (path, method, payload) => {
    // endpoint => it will be the api endpoint we call
    // method => it will be the api method post/get/delete/patch/put
    // payload => it will be the body request data

    let token = localStorage.getItem("token");
    let headers = {
        Authorization: "Bearer " + token,
    };
    let config = {
        method: method,
        url: path,
        data: payload,
        headers: headers,
    };
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios(config);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};

export const PublicApiCall = async (path, method, payload) => {
    let config = {
        method: method,
        url: path,
        data: payload,
    };
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios(config);
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};
