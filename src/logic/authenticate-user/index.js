
require("dotenv").config();
const KUBIK_DATA_API_URL = process.env.REACT_APP_KUBIK_DATA_API_URL;

/**
 * Creates a user with a username and password and gets a token
 */
export default function (username, password) {

    return (async () => {
        
        const response = await fetch(`${KUBIK_DATA_API_URL}/session`, {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({username, password})
        })
        
        if (response.status !== 201) {
           const  {error} = await response.json()
           throw Error(error)
        }
        else {
            const { token } = await response.json()
            return token
          
        }
            
    })()
}