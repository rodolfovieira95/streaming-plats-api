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
