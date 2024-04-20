import { DEEZER_API_URL } from "../constants";

export const getPlaylistInfo = async (
  id: string,
): Promise<
  DeezerPlaylistType & {
    error?: DeezerResultErrorType;
  }
> => {
  const result = await fetch(`${DEEZER_API_URL}/playlist/${id}`);
  return await result.json();
};

export const addPlaylistTracks = async (
  id: string,
  accessToken: string,
  trackIds: string[],
): Promise<
  DeezerPlaylistType & {
    error?: DeezerResultErrorType;
  }
> => {
  const result = await fetch(
    `${DEEZER_API_URL}/playlist/${id}/tracks?access_token=${accessToken}&songs=${trackIds.toString()}`,
    { method: "POST" },
  );
  return await result.json();
};

export const deletePlaylistTracks = async (
  id: string,
  accessToken: string,
  trackIds: string[],
): Promise<
  DeezerPlaylistType & {
    error?: DeezerResultErrorType;
  }
> => {
  const result = await fetch(
    `${DEEZER_API_URL}/playlist/${id}/tracks?access_token=${accessToken}&songs=${trackIds.toString()}`,
    { method: "DELETE" },
  );
  return await result.json();
};
