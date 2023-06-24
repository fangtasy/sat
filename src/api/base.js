import axios from "axios";

const showStatus = (status) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 402:
      message = '拒绝访问(402)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

// 创建axios实例
const request = axios.create({
  baseURL: "/api",// 所有的请求地址前缀部分
  timeout: 5000, // 请求超时时间(毫秒)
  // withCredentials: true,// 异步请求携带cookie
  // headers: {
  // 设置后端需要的传参类型
  // 'Content-Type': 'application/json',
  // 'token': x-auth-token',//一开始就要token
  // 'X-Requested-With': 'XMLHttpRequest',
  // },
});

request.interceptors.request.use(
  config => {
    return config
  },
  (err) => {
    err.message = '服务器异常，请联系管理员！'
    // 错误抛到业务代码
    return Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    console.log('==== response interceptor =====', response)
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      msg = showStatus(status)
      if (typeof response.data === 'string') {
        response.data = { msg }
      } else {
        response.data.msg = msg
      }
      Promise.reject(response) 
    }else {
      return response.data;
    }
  },
  (err)=>{
    err.message = '请求超时或服务器异常，请检查网络或联系管理员！'
    return Promise.reject(err)
  }
)

export default request;

