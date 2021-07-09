export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      //for Spring Boot back-end
          //This code suitable for Node.js Express back-end
          
          // return {
          //     Authorization: 'Bearer' + user.accessToken
          // };}
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }