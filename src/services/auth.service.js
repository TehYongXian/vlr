import axios from "axios";
import Category from "src/views/pages/Category/Category";
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


            })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        console.log("register")
        return axios
            .post(API_URL + "signup", {
                username,
                email,
                password
            })
    }


    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    //add category service
    update(categoryName, categoryType) {
        console.log("updateCategory")
        return axios
            .post(API_URL + "categoryCreate", {
                categoryName,
                categoryType
            })
    }

    getCategory(search = '', page = 1, perPage = 5) {
        return axios.get(API_URL + `categories?search=${search}&page=${page}&per_page=${perPage}`)
    }

    // when press delete it will detact the ID, and delete the correct ID slot from the database.
    // after delete refresh the client site table to view the latest data that need to be show.
    deleteCat(categoryId) {
        return axios
            .delete(API_URL + `categories/${categoryId}`)
    }

    editCat(categoryId, categoryName, categoryType) {
        console.log("this is auth.service editCat")
        return axios
            .put(API_URL + `editCategory/${categoryId}`, {
                categoryName,
                categoryType
            });
    }

}

export default new AuthService();