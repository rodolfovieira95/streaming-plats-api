import { DEEZER_API_URL } from "../constants";

export const getArtistInfo = async (
  id: string,
): Promise<DeezerArtistType & { error?: DeezerResultErrorType }> => {
  const result = await fetch(`${DEEZER_API_URL}/artist/${id}`);
  return await result.json();
};
