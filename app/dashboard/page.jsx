'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"


const Dashboard = () => {
    const router = useRouter()

    useEffect(()=> {
        const userData = localStorage.getItem('userDetails')

        if(userData === null) {
            router.push('/')
        }
    }, [])
    return (
        <div>This is events page</div>
    );
}
 
export default Dashboard;