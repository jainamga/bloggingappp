import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://login2-production.up.railway.app/api/test/';

const API_URL2 = 'https://login2-production.up.railway.app/home/';



class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getAllusers(){
    return axios.get(API_URL2 + 'users', { headers: authHeader() });
  }
}

export default new UserService();