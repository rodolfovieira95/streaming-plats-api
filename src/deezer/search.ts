import { DEEZER_API_URL } from "../constants";

export const search = async (query: string, connection?: string) => {
  const hasConnection = connection ? `/${connection}` : "";
  const result = await fetch(
    `${DEEZER_API_URL}/search${hasConnection}?q=${query}`,
  );
  return await result.json();
};
