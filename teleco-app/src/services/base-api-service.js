import axios from 'axios';

const https = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
  withCredentials: true
})

https.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, 
  (error) => {
    if (error?.response?.status === 401 && window.location.pathname !== "/signup" && window.location.pathname !== "/login") {
      localStorage.removeItem('token')
      window.location.replace('/login')
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default https;
