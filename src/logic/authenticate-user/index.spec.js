import axios from 'axios';

import AuthenticateUser  from './index'
import KubikAPI from '../../infrastructure/http'


jest.mock("axios");

describe("authenticate user", () => {
  let authenticateUser;
  let kubikAPI;

  beforeEach(() => {
    kubikAPI = new KubikAPI();
    authenticateUser = new AuthenticateUser(kubikAPI);
  })

  it("should authenticate user whith status 201", async () => {
    const data = {data : { token: 'token' } , status: 201}
    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    const result = await authenticateUser.authenticate("username", "password");
    
    await expect(result).toEqual(data);
    await expect(result.status).toEqual(data.status);
  })


});