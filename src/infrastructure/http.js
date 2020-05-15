import axios from "axios";

export default class KubikAPI {

    async get (url) {
        return await axios.get(url);
    }
    
    async post (url, data, headers) {
        return axios.post(url, data, headers);
    }

  
};
