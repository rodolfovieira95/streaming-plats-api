import { getChartInfo } from "./chart";

const danceId = "113";

test("Tests getChartInfo with dance ID", async () => {
  const { albums, artists, playlists, podcasts, tracks } =
    await getChartInfo(danceId);

  expect(albums.data.length).toBeGreaterThan(0);
  expect(artists.data.length).toBeGreaterThan(0);
  expect(playlists.data.length).toBeGreaterThan(0);
  expect(tracks.data.length).toBeGreaterThan(0);
});
test("Tests getChartInfo with empty ID", async () => {
  const { albums, artists, playlists, podcasts, tracks } =
    await getChartInfo("");

  expect(albums.data.length).toBeGreaterThan(0);
  expect(artists.data.length).toBeGreaterThan(0);
  expect(playlists.data.length).toBeGreaterThan(0);
  expect(tracks.data.length).toBeGreaterThan(0);
  expect(podcasts.data.length).toBeGreaterThan(0);
});
