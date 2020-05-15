import axios from 'axios';

import RetrieveDataUser  from './index'


jest.mock("axios");

describe("retrieve data user", () => {
  let retrieveData;

  beforeEach(() => {
    retrieveData = new RetrieveDataUser();
  })

  it("should authenticate user whith status 201", async () => {
    const data = {data : { username: "user", token: 'token', date: "date" } , status: 201}
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    const result = await retrieveData.retrieveUser("username", "token");
    
    await expect(result).toEqual(data);
    await expect(result.status).toEqual(data.status);
  })

}); 