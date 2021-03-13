import axios from "axios"
import { GET_ALL_COURSES, GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_TEACHERS, GET_COURSE, GET_POST, GET_SPECILITY, GET_FRACMENT } from "./actions"

const API_URL=process.env.REACT_APP_API_URL

export const getAllPost = ()=> dispatch=>{
    axios.get(`${API_URL}/posts`).then(
        resp=>{
            return dispatch({
                type: GET_ALL_POSTS,
                posts: resp.data
            })
        }
    )
}
export const getAllSpecilities = ()=> dispatch=>{
    axios.get(`${API_URL}/posts`).then(
        resp=>{
            return dispatch({
                type: GET_ALL_SPECIALITIES,
                specialities: resp.data
            })
        }
    )
}
export const getAllCourses = ()=> dispatch=>{
    axios.get(`${API_URL}/posts`).then(
        resp=>{
            return dispatch({
                type: GET_ALL_COURSES,
                courses: resp.data
            })
        }
    )
}
export const getAllTeachers = ()=> dispatch=>{
    axios.get(`${API_URL}/posts`).then(
        resp=>{
            return dispatch({
                type: GET_ALL_TEACHERS,
                teachers: resp.data
            })
        }
    )
}

//----------------------------------

export const getPost = (id)=> dispatch=>{
    axios.get(`${API_URL}/posts/${id}`).then(
        resp=>{
            return dispatch({
                type: GET_POST,
                post: resp.data
            })
        }
    )
}
export const getspeciality = (id)=> dispatch=>{
    axios.get(`${API_URL}/posts/${id}`).then(
        resp=>{
            return dispatch({
                type: GET_SPECILITY,
                speciality: resp.data
            })
        }
    )
}
export const getCourse = (id)=> dispatch=>{
    axios.get(`${API_URL}/posts/${id}`).then(
        resp=>{
            return dispatch({
                type: GET_COURSE,
                course: resp.data
            })
        }
    )
}
export const getFracment = ()=> dispatch=>{
    axios.get(`${API_URL}/posts`).then(
        resp=>{
            return dispatch({
                type: GET_FRACMENT,
                fracment: resp.data
            })
        }
    )
}