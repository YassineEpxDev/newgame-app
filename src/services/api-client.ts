import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'af9a0fc1dcc74c34833415fdd7b8910b'
    }
})  