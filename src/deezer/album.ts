import { DEEZER_API_URL } from "../constants";

export const getAlbumInfo = async (
  id: string,
): Promise<DeezerAlbumType & { error: DeezerResultErrorType }> => {
  const result = await fetch(`${DEEZER_API_URL}/album/${id}`);
  return await result.json();
};
