
require("dotenv").config();
const KUBIK_DATA_API_URL = process.env.REACT_APP_KUBIK_DATA_API_URL;


/**
 * Creates a user with a username and password and gets a token
 */
export default class AuthenticateUser {

    constructor(kubikAPI){
        this.kubikAPI = kubikAPI;
      }

    async authenticate (username, password ) {
        
        let url = `${KUBIK_DATA_API_URL}/session`
        let data = {
            username,
            password
             }

        try  {

         return await this.kubikAPI.post(url, data)
       
        }catch(error) {
                      
              throw Error(error.response.data)
          }
            
        }
}