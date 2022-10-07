import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        axios("https://jsonplaceholder.typicode.com/users")
            // .then((res) => res.json()) buna gerek yok artık kendi cevirecek
            .then((res) => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(()=>setIsLoading(false))


    }, [])

    return (
        <div>
            <h1>Users</h1>
            {
                isLoading && <div>Loading...</div>   //burada veriler gelene kadar loading yazıcak sonra geldiğinde gidecek 
                //13. satırda false a çektik
            }
            {
                users.map((users, index) => (<div key={index}>{users.name}</div>))
            }

        </div>
    );
}

export default Users
