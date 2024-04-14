import { getPlaylistInfo } from "./playlist";

const randomPlaylistId = "908622995";

test("Tests getPlaylistInfo with random playlist ID", async () => {
  const { id, type } = await getPlaylistInfo(randomPlaylistId);

  expect(id).toBe(parseInt(randomPlaylistId));
  expect(type).toBe("playlist");
});

test("Tests getPlaylistInfo with empty ID", async () => {
  const { error } = await getPlaylistInfo("");
  expect(error?.code).toBe(600);
  expect(error?.message).toBe("Unknown path components : /playlist");
  expect(error?.type).toBe("InvalidQueryException");
});
