
require("dotenv").config();
const KUBIK_DATA_API_URL = process.env.REACT_APP_KUBIK_DATA_API_URL;

/**
 * Retrieves a user data by his username and token
**/

export default class RetrieveUserData {

  constructor(kubikAPI){
    this.kubikAPI = kubikAPI;
  }

   
    async retrieveUser (username, token ) {
        
        let url = `${KUBIK_DATA_API_URL}/info/${username}/${token}`
       
        try  {
         return await this.kubikAPI.get(url)
       
        }catch(error) {
             throw Error(error.response.data)
          }
            
        }
}