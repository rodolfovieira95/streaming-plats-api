import { getAlbumInfo } from "./album";

const animalsId = "394992317";

test("Tests getAlbumInfo", async () => {
  const { id, title, type } = await getAlbumInfo(animalsId);
  expect(id).toBe(parseInt(animalsId));
  expect(title).toBe("Animals");
  expect(type).toBe("album");
});

test("Tests getAlbumInfo with empty string", async () => {
  const { error } = await getAlbumInfo("");
  expect(error?.code).toBe(600);
  expect(error?.message).toBe("Unknown path components : /album");
  expect(error?.type).toBe("InvalidQueryException");
});
