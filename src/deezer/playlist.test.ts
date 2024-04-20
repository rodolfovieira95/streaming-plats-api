import {
  addPlaylistTracks,
  deletePlaylistTracks,
  getPlaylistInfo,
} from "./playlist";
import { createPlaylist, deletePlaylist } from "./user";

const yourUserAccessToken = process.env.ACCESS_TOKEN_TEST || "";
const randomPlaylistId = "908622995";
const tracklistIds = ["129313094", "140856305", "2421997365", "2635513182"];

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

test("Tests creating a playlist and adds 4 tracks to it, deletes 2 tracks and delete the playlist.", async () => {
  const creationResult = await createPlaylist(
    yourUserAccessToken,
    "Test Playlist",
  );
  expect(creationResult).not.toBe(null || undefined);
  const addTracksResult = await addPlaylistTracks(
    creationResult.id,
    yourUserAccessToken,
    tracklistIds,
  );
  expect(addTracksResult).toBe(true);
  const deleteTracks = await deletePlaylistTracks(
    creationResult.id,
    yourUserAccessToken,
    ["140856305", "2421997365"],
  );
  expect(deleteTracks).toBe(true);
  const deleteResult = await deletePlaylist(
    yourUserAccessToken,
    creationResult.id,
  );
  expect(deleteResult).toBe(true);
});
