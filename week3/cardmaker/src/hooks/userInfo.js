import {useEffect, useState} from "react";


function userInfo(){
    let url = 'https://jsonplaceholder.typicode.com/posts'

    const [data, setData] = useState([{}]);
    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res)=> setData(res))
        .catch((error) => console.log("ERROR:",error))
    }, [url]);

    return data
}

export default userInfo;




    