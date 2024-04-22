import dotenv from 'dotenv'
dotenv.config()
const API_URL = process.env.NEXT_PUBLIC_API_URL
const PUBLICATIONS = 'posts'

export const getPublications = async (): Promise<any[any] | null> => {
    let posts = null
    await fetch(`${API_URL}/${PUBLICATIONS}`)
    .then(res => res.json())
    .then(data => posts = data.data)
    return posts
}

export const createComment = async (postId: string, nickname: string, content: string): Promise<any[any] | null> => {
    let comments = null
    await fetch(`${API_URL}/comments`, {
        method: "POST",
        body: JSON.stringify({_idPost: postId, nickname, content}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => comments = data)
    return comments
}

export const getComments = async (postId: string): Promise<any[any] | null> => {
    let comments = null
    await fetch(`${API_URL}/comments/${postId}`)
    .then(res => res.json())
    .then(data => comments = data)
    return comments
}

export const updateLikes = async (publicationId: string, newLikes: number): Promise<any[any] | null> => {
    let publication = null
    await fetch(`${API_URL}/${PUBLICATIONS}/${publicationId}/likes`, {
        method: "POST",
        body: JSON.stringify({postId: publicationId, newLikes}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => publication = data)
    return publication
}

export const getPublication = async (publicationId: string): Promise<any[any] | null> =>  {
    let publication = null
    await fetch(`${API_URL}/${PUBLICATIONS}/${publicationId}`)
    .then(res => res.json())
    .then(data => publication = data)
    return publication
}

export const login = async (nickname:string , password:string, kitId?: string): Promise<any | null> => {
    let logged = null 
    if(kitId){
        await fetch(`${API_URL}/users/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data: {nickname, password}})
        })
        .then(res => res.json())
        .then(data => logged = data)
    } else {
        await fetch(`${API_URL}/users/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data: {nickname, password, kits: kitId}})
        })
        .then(res => res.json())
        .then(data => logged = data)
        
    }
    console.log(logged)
    return logged
}

export const register = async (nickname: string, password: string, kitId?: string): Promise<any | null> => {
    let registered = null
    if(kitId){
        await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data: {nickname, password, kits: kitId}})  
        })
        .then(res => res.json())
        .then(data => registered = data)
    } else {
        await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data: {nickname, password, kits: []}})  
        })
        .then(res => res.json())
        .then(data => registered = data)
    }
    console.log(registered)
    return registered
}

export const updateConfigKit = async (nickname: string, hour: string, foodAmount: number) =>  {
    let updatedConfig = null
    await fetch(`${API_URL}/users/${nickname}/kits/timeconfig`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nickname, 
            timeConfigs: {
                    hour,
                    foodAmount
                }
        })
    })
    .then(res => res.json())
    .then(data => updatedConfig = data)
    return updatedConfig
}

export const getDispensationsHistory = async (userId: string): Promise<any[any] | null> => {
    let dispensationsHistory = null
    await fetch(`${API_URL}/users/${userId}/kits/dispesation`)
    .then(res => res.json())
    .then(data => dispensationsHistory = data)
    return dispensationsHistory
}
