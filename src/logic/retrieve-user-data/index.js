
require("dotenv").config();
const KUBIK_DATA_API_URL = process.env.KUBIK_DATA_API_URL;

/**
 * Retrieves a user data by his username and token
 */
export default function (username, token) {


    return (async () => {
        const response = await fetch(`http://localhost:8080/info/${username}/${token}`, {
            method: 'get',
                   })

        
        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)
        }
        
        return await response.json()

     })()
}