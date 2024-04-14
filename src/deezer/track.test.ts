import { getTrackInfo } from "./track";

const animalsId = "2102633427";

test("Tests getTrackInfo", async () => {
  const { id, title, type } = await getTrackInfo(animalsId);
  expect(id).toBe(parseInt(animalsId));
  expect(title).toBe("Animals");
  expect(type).toBe("track");
});

test("Tests getTrackInfo with empty string", async () => {
  const { error } = await getTrackInfo("");
  expect(error?.code).toBe(600);
  expect(error?.message).toBe("Unknown path components : /track");
  expect(error?.type).toBe("InvalidQueryException");
});
