import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MyAxios from "./axios";
import { allProduct_Response } from "../../Tests/mocks/Product.mock";
import { describe, it, expect } from "vitest";

describe("Axious Gateyway fetchData", () => {
  it("get from api", async () => {
    const MyAxiosTest = new MyAxios();
    const apiPath = process.env.REACT_APP_API_PATH;
    const mock = new MockAdapter(axios);

    mock.onGet(`${apiPath}/product`).reply(200, allProduct_Response);
    const fetchedData = await MyAxiosTest.fetchData("/product");

    expect(fetchedData).toEqual(allProduct_Response);

    // const dataConverted = dataConverter(fetchedData);
  });
});
