import { DEEZER_API_URL } from "../constants";

export const getTrackInfo = async (
  id: string,
): Promise<
  DeezerTrackType & {
    error?: DeezerResultErrorType;
  }
> => {
  const result = await fetch(`${DEEZER_API_URL}/track/${id}`);
  return await result.json();
};
