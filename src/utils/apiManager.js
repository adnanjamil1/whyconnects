import { PublicApiCall } from "./apiCalls";

const BASE_URL = "http://115.186.58.56:9089";// Server Path
// const BASE_URL = "192.168.1.86:9089"; // Local Path




const STATS = "/statistics"
const LOGIN = "/login";
const GETCALL = "/calldetails";
const CALLDETAIL = "/calldetailsreport";
const GETSMS = "/smsdetails";
const SMSDETAIL = "/smsdetails";
const USERDETAIL = "/userdetails";
const GETDETAILNUM = "/calldetailsonnumber";
const GRAPHSTATS = "/statisticsgraph";





export const getStats = (data) => {
    let path = BASE_URL + STATS;
    return PublicApiCall(path, "post", data);
};

export const login = (data) => {
    let path = BASE_URL + LOGIN;
    return PublicApiCall(path, "post", data);
};

export const getCalls = (data) => {
    let path = BASE_URL + GETCALL;
    return PublicApiCall(path, "post", data);
};

export const getCalldetailreports = (data) => {
    let path = BASE_URL + CALLDETAIL;
    return PublicApiCall(path, "post", data);
};

export const getSms = (data) => {
    let path = BASE_URL + GETSMS;
    return PublicApiCall(path, "post", data);
};

export const getSmsdetails = (data) => {
    let path = BASE_URL + SMSDETAIL;
    return PublicApiCall(path, "post", data);
};

export const getUserdetails = (data) => {
    let path = BASE_URL + USERDETAIL;
    return PublicApiCall(path, "post", data);
};

export const getDetailnum = (data) => {
    let path = BASE_URL + GETDETAILNUM;
    return PublicApiCall(path, "post", data);
};


export const getGraphstats = (data) => {
    let path = BASE_URL + GRAPHSTATS;
    return PublicApiCall(path, "post", data);
};
