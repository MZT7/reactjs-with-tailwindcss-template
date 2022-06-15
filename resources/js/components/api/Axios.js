import axios from "axios";

// axios.defaults.headers.common["Authorization"] = "sometoken";

const base_URL = "https://moadvice.herokuapp.com/";

export default axios.create({
    baseURL: base_URL,
});

export const axiosPrivate = axios.create({
    baseURL: base_URL,
    headers: {
        // Authorization: `Bearer ${"fdryry"}`,
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
