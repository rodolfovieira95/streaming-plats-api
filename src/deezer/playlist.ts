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
