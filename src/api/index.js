import axios from 'axios';
let parallel = axios;
// 新建基本axios实例
const instance = axios.create({
    baseURL:'http://10.11.11.6:8082/api/',
    timeout:5000,
    withCredentials: true,
    contentType: "application/json;charset=UTF-8",
    responseType: 'json'
})

// 新建第二个axios实例
const staticData = axios.create({
    baseURL:"http://192.168.1.106:8767/api/reportManager/getReleaseReportResult",
    timeout:5000,
    contentType:"application/json;charset=UTF-8",
    responseType:"json",
    withCredentials: true,
})

export {
    parallel,
    staticData
}
export default instance