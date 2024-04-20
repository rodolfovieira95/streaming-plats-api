import { DEEZER_API_URL } from "../constants";

export const getUserInfo = async (
  accessToken: string,
): Promise<
  DeezerUserType & {
    error?: DeezerResultErrorType;
  }
> => {
  const result = await fetch(
    `${DEEZER_API_URL}/user/me?access_token=${accessToken}`,
  );
  return await result.json();
};

export const getUserPlaylists = async (
  userId: string,
): Promise<
  { data: DeezerPlaylistType[] } & {
    error?: DeezerResultErrorType;
  }
> => {
  const result = await fetch(`${DEEZER_API_URL}/user/${userId}/playlists`);
  return await result.json();
};

export const createPlaylist = async (
  accessToken: string,
  title: string,
): Promise<
  { id: string } & {
    error?: DeezerResultErrorType;
  }
> => {
  const result = await fetch(
    `${DEEZER_API_URL}/user/me/playlists?access_token=${accessToken}&title=${title}`,
    {
      method: "POST",
    },
  );
  return await result.json();
};

export const deletePlaylist = async (
  accessToken: string,
  playlistId: string,
): Promise<
  { id: string } & {
    error?: DeezerResultErrorType;
  }
> => {
  const result = await fetch(
    `${DEEZER_API_URL}/playlist/${playlistId}?access_token=${accessToken}`,
    {
      method: "DELETE",
    },
  );
  return await result.json();
};
