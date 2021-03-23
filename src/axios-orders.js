import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://console.firebase.google.com/project/react-my-burger-b2ab3/database/react-my-burger-b2ab3-default-rtdb/data'
});

export default instance;