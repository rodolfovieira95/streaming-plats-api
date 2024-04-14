import { getGenreInfo } from "./genre";

const danceId = "113";

test("Tests getGenreInfo with dance ID", async () => {
  const { id, name, type } = await getGenreInfo(danceId);

  expect(id).toBe(parseInt(danceId));
  expect(name).toBe("Dance");
  expect(type).toBe("genre");
});
test("Tests getGenreInfo with empty ID", async () => {
  const { data } = await getGenreInfo("");
  expect(data?.length).toBeGreaterThan(0);
});
