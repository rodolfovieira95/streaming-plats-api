import { getUserInfo } from "./user";

const yourUserAccessToken = process.env.ACCESS_TOKEN_TEST || "";
const invalidUserToken = "";

test("Tests getUserInfo with valid userToken", async () => {
  const { id, name } = await getUserInfo(yourUserAccessToken);
  expect(id).not.toBe(null);
  expect(name).not.toBe(null);
});

test("Tests getUserInfo with invalid access_token", async () => {
  const { error } = await getUserInfo(invalidUserToken);
  expect(error?.code).toBe(300);
  expect(error?.message).toBe("Invalid OAuth access token.");
  expect(error?.type).toBe("OAuthException");
});

test("Tests getUserInfo with empty access_token", async () => {
  const { error } = await getUserInfo("");
  expect(error?.code).toBe(300);
  expect(error?.message).toBe("Invalid OAuth access token.");
  expect(error?.type).toBe("OAuthException");
});
