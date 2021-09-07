import axios from 'axios'

export const getImages = () => axios.get('https://api.unsplash.com/photos/?client_id=4zymYC-8Ik3RzgXFJYB0OKGA4jW03lOfKDb9BySlSxA')
export const getData = () => axios.get('https://jsonplaceholder.typicode.com/posts')
export const getAllUsers = () => axios.get('http://localhost:3005/users')

// export const getAllUsers = () => axios.get('https://my-json-server.typicode.com/ivann-2612/dbjsonlucus/users')

export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})