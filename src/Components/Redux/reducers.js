import { GET_ALL_COURSES, GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_TEACHERS, GET_COURSE, GET_FRACMENT, GET_POST, GET_SPECILITY } from "./actions"

export const postReducer =(state={}, action)=>{
    if(action.type===GET_ALL_POSTS){
        return{
            ...state,
            posts: action.posts
        }
    }
    if(action.type===GET_POST){
        return{
            ...state,
            post: action.post
        }
    }
    return state
}
export const specialityReducer =(state={}, action)=>{
    if(action.type===GET_ALL_SPECIALITIES){
        return{
            ...state,
            spepecialities: action.spepecialities
        }
    }
    if(action.type=== GET_SPECILITY){
        return{
            ...state,
            speciality: action.speciality
        }
    }
    return state
}
export const courseReducer =(state={}, action)=>{
    if(action.type===GET_ALL_COURSES){
        return{
            ...state,
            courses: action.courses
        }
    }
    if(action.type=== GET_COURSE){
        return{
            ...state,
            course: action.course
        }
    }
    return state
}
export const teacherReducer =(state={}, action)=>{
    if(action.type===GET_ALL_TEACHERS){
        return{
            ...state,
            teachers: action.teachers
        }
    }
    return state
}
export const fracmentReducer =(state={}, action)=>{
    if(action.type===GET_FRACMENT){
        return{
            ...state,
            fracment: action.fracment
        }
    }
    
    return state
}