import { useState } from 'react'

// custom hook
export default function useFetch() {
    var [result, setResult] = useState([]);
    // Hook function extractDataFromApi
    function extractDataFromApi(url, payload, method) {
        fetch(url, {
            method:method
        })
            .then((result) => result.json())
            .then((tempUser) => {
                setResult(tempUser);
            })
    }
    return { result, extractDataFromApi }
}
