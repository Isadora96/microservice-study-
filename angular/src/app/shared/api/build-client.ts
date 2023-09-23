import axios from 'axios';

export default (req: any) => {
    if (typeof window == 'undefined') {
      // server
      console.log('server')
      return axios.create({
        //baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local/api/v1/users/currentuser',
        baseURL: 'http://localhost:3000',
        headers: req.headers
      });
    } else {
      console.log('browser')
      return axios.create({
        baseURL: '/'
      })
    }
  };