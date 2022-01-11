import axios from 'axios';

const https = axios.create({
  baseURL: 'https://react-test.apps-dev.tid.es',
  headers: {
    "Content-Type": "application/json"
  }
})

https.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, 
  (error) => {
    if (error?.response?.status === 401 && window.location.pathname !== "/login") {
      localStorage.removeItem('token')
      window.location.replace('/login')
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default https;
