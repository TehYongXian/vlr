import axios from "axios";

const API_URL = "http://localhost:3010/api/auth/";

class AuthService {
    Login(username, password) {
        console.log("Login done")
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
                
                
            } )
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        console.log("register")
        return axios
        .post (API_URL + "signup", {
            username,
            email,
            password
        }) 
    }
    

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    //category service
    update(categoryName, categoryType) {
        console.log("updateCategory")
        return axios
        .post(API_URL +"categoryCreate", {
            categoryName,
            categoryType
        })
    }

    getCategory(search = '') {
        return axios.get(API_URL + `categories?search=${search}`)
    }

    nextPage = (pageNumber) => {
        return axios.get(API_URL + `categories?page=${pageNumber}`)
    }
}

export default new AuthService();