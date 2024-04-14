import { getArtistInfo } from "./artist";

const martinGarrixDeezerId = "3968561";

test("Tests getArtistInfo", async () => {
  const { id, name, type } = await getArtistInfo(martinGarrixDeezerId);
  expect(id).toBe(parseInt(martinGarrixDeezerId));
  expect(name).toBe("Martin Garrix");
  expect(type).toBe("artist");
});

test("Tests getArtistInfo with empty string", async () => {
  const { error } = await getArtistInfo("");
  expect(error?.code).toBe(600);
  expect(error?.message).toBe("Unknown path components : /artist");
  expect(error?.type).toBe("InvalidQueryException");
});
