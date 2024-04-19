"use client"
import { createContext, useState } from "react";

type userContext = {
    user: {
        nickname: string,
        token: string
    },
    setUser: any
}

const UserContext = createContext({} as userContext)

export default UserContext

export function UserContextProvider({children}:any) {
    const [user, setUser] = useState({nickname: "", token: ""})
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}
