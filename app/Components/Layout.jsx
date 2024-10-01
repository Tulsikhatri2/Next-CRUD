"use client"
import { redirect, usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Layout = ({children}) => {
    const publicRoutes = ["/"]
    const pathName = usePathname()
    const token = localStorage.getItem("token")
    const router = useRouter()

    useEffect(()=>{
        if(!token){
            if(!publicRoutes.includes(pathName)){
                router.push("/")
            }
        }
        else{
            if(publicRoutes.includes(pathName)){
                router.push("/user-form")
            }else{
                router.push(pathName)
            }
        }
    },[token,pathName])
    
  return (
    <div>
        {token?
        <>
        <div>user logged in</div>
        {children}
        </>
        :
        <>
        {children}
        </>
        }
        
    </div>
  )
}

export default Layout