import { DEEZER_API_URL } from "../constants";

export const getChartInfo = async (
  id: string,
): Promise<DeezerChartType & { error?: DeezerResultErrorType }> => {
  const result = await fetch(`${DEEZER_API_URL}/chart/${id}`);
  return await result.json();
};
