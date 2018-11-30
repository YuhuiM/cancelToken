import axios from 'axios';

const url = 'http://localhost:3001';

export function AApi() {
  return axios.get(`${url}/a`);
}

export function BApi() {
  return axios.get(`${url}/b`);
}

export function CApi() {
  return axios.get(`${url}/c`, {
    cancelToken: null, // 避免被加入cancel队列
  });
}
