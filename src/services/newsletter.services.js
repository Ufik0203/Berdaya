import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getNewsletter = (email, callback, errorCallback) => {
    axios.post(`${API_URL}/newsletter`, { email }).then((res) => {
        if (callback) {
            callback(res.data);
        }
    }). catch((err) => {
        if (errorCallback) {
            errorCallback(err);
        }
    })
}