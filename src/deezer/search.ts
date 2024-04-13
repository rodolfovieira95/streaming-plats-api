import { DEEZER_API_URL } from "../constants";

export const search = async (
  query: string,
  options?: DeezerSearchOptionsType,
): Promise<DeezerSearchResultType> => {
  const strictMode = options?.strict ? "?strict=on" : "";
  const order = options?.order ? `?order=${options.order}` : "";
  const hasConnection = options?.connections && options.connections.length > 0;
  const stringfyConnections = hasConnection
    ? options.connections?.reduce((accumulator, currentValue) => {
        const queryValue =
          typeof currentValue.query === "string"
            ? `"${currentValue.query}"`
            : currentValue.query;
        return accumulator + `${currentValue.connection}:${queryValue} `;
      }, "")
    : "";
  try {
    const result = await fetch(
      `${DEEZER_API_URL}/search?q=${stringfyConnections ? stringfyConnections : query}${strictMode}${order}`,
    );
    return await result.json();
  } catch (error) {
    console.error({ error: await error });
    return new Promise(() => error);
  }
};
