import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getAboutCel = (callback) => {
    axios.get(`${API_URL}/about`).then((res) => {
        callback(res.data);
    }).catch((err) => {
        console.log(err);
    })
}

export const getSolusi = (callback) => {
    axios.get(`${API_URL}/solusi`).then((res) => {
        // console.log(res);
        callback(res.data);
    }).catch((err) => {
        console.log(err);
    })
}