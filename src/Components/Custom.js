import React, { useState } from 'react'
import useFetch from '../Hook/ useFetch'

export default function Custom() {
    // custom Hook
    var { result, extractDataFromApi } = useFetch();

    let url = `https://jsonplaceholder.typicode.com/users`
    let [payload, setPayload] = useState({
        "id": "1",
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    })
    let method = 'GET'

    // function to fetch API
    var callFetch = () => { extractDataFromApi(url, payload, method) }

    return (
        <div>
            <button onClick={callFetch}>Fetch</button>
            <br />
            {/* render data of Api  */}
            <div className='data'>
                {
                    (result !== undefined) ?
                        result.map((item) => {
                            return <>
                                <div className='userCard'>
                                    <div className='content'>
                                        <h3>{item.name}</h3>
                                        <h4>@{item.username}</h4>
                                        <p><i class="fa-solid fa-globe"></i> {item.website}</p>
                                        <p><i class="fa-solid fa-envelope"></i> {item.email}</p>
                                        <p><i class="fa-solid fa-building"></i> {item.company.name}</p>
                                        <p><i class="fa-solid fa-location-dot"></i> {item.address.city}</p>
                                    </div>
                                </div>
                            </>
                        }) : null
                }
            </div>
        </div>
    )
}
