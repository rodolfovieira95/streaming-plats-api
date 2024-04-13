import { DEEZER_API_URL } from "../constants";

export const album = async (id: string): Promise<DeezerAlbumType> => {
  const result = await fetch(`${DEEZER_API_URL}/album/${id}`);
  return await result.json();
};
