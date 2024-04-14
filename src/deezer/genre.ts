import { DEEZER_API_URL } from "../constants";

export const getGenreInfo = async (
  id: string,
): Promise<
  DeezerGenreType & {
    error?: DeezerResultErrorType;
    data?: Array<DeezerGenreType>;
  }
> => {
  const result = await fetch(`${DEEZER_API_URL}/genre/${id}`);
  return await result.json();
};
