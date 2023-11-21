import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"
//registert
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//login
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")

}

//add projects
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

//home Projects
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home`,"","")
}

//all projects
export const allProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/project/all`,"",reqHeader)
}