import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleUser() {

    const [userData, setUserData] = useState([])

    const params = useParams()
    const id = params.userId

    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await response.json()
            setUser(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            {console.log('user', user)}
            User {id} data: 
            
            {/* display single user data from user */}


        </div>
    );
}
