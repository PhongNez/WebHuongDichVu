import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const handleGetAllUser = (userId) => {
    return axios.get(`/api/get-all-user?id=${userId}`)
}

const handleGetAllUserShop = () => {
    return axios.get('/api/v1/admin/account')
}

const createNewUser = (data) => {
    return axios.post('/api/create-new-user', data)
}

const createNewUserTest = (email, password) => {
    return axios.post('/api/v1/login', { email: email, password: password })
}
export {
    handleLoginApi, handleGetAllUser, createNewUser, createNewUserTest, handleGetAllUserShop
}   