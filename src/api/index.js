export * from './services';

import axios from 'axios';

const cancelTokenSources = new Map(); // 定义cancel队列

axios.interceptors.request.use(config => { // 请求拦截器中将请求加入cancel队列
  if (!config.hasOwnProperty('cancelToken')) { // 排除不需要cancel的请求
    const source = axios.CancelToken.source();

    cancelTokenSources.set(source.token, source.cancel); // 加入cancel队列
    config.cancelToken = source.token;
  }

  return config;
}, error => Promise.reject(error));

axios.interceptors.response.use(res => { // 响应拦截器中从cancel队列中移除
  if (res.config.cancelToken) {
    cancelTokenSources.delete(res.config.cancelToken);
  }

  return res;
}, error => {
  if (axios.isCancel(error)) {
    cancelTokenSources.delete(error.message)
  }
  return Promise.reject(error)
});

export default cancelTokenSources;
