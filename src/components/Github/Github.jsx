import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])


    return (
        <div className='text-center m-4 bg-gray-600 text-white'>Github followers: {data.followers}
        <div className='text-center m-4 bg-gray-600 text-white'>Github Url: {data.url}

        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/vishsalunke14')
   return response.json()

}
