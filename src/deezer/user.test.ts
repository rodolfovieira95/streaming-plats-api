import {
  createPlaylist,
  deletePlaylist,
  getUserInfo,
  getUserPlaylists,
} from "./user";

const yourUserAccessToken = process.env.ACCESS_TOKEN_TEST || "";
const invalidUserToken = "123";
const yourUserId = process.env.USER_ID_TEST || "";

test("Tests getUserInfo with valid userToken", async () => {
  const { id, name } = await getUserInfo(yourUserAccessToken);
  expect(id).not.toBe(undefined);
  expect(name).not.toBe(undefined);
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

test("Tests getUserPlaylists with my user ID", async () => {
  const { data } = await getUserPlaylists(yourUserId);
  expect(data.length).toBeGreaterThan(0);
});

test("Tests createPlaylist and deletePlaylist", async () => {
  const createResult = await createPlaylist(
    yourUserAccessToken,
    "New Playlist - RAFV",
  );
  expect(createResult.id).not.toBe(undefined || null);
  const deleteResult = await deletePlaylist(
    yourUserAccessToken,
    createResult.id,
  );
  expect(deleteResult).toBe(true);
});
