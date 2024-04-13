import { search } from "./search";

type SearchType = {
  data?: Array<Record<string, any>>;
  total?: number;
  next?: string;
  error?: {
    code: number;
    message: string;
    type: string;
  };
};

const advancedSearch: DeezerSearchOptionsType = {
  connections: [{ connection: "artist", query: "Martin Garrix" }],
};

const advancedSearchEmptyQuery: DeezerSearchOptionsType = {
  connections: [{ connection: "artist", query: "" }],
};

test("Tests basic search", async () => {
  const { data, total, next }: SearchType = await search("Martin Garrix");
  expect(total).toBeGreaterThan(100);
  expect(data.length).toBeGreaterThan(0);
  expect(next).not.toBeNull();
});

test("Tests basic search with empty query", async () => {
  const { error }: SearchType = await search("");
  expect(error?.code).toBe(500);
  expect(error?.message).toBe("empty parameter");
  expect(error?.type).toBe("ParameterException");
});

test("Tests advanced search with artist", async () => {
  const { data, total, next }: SearchType = await search("", advancedSearch);

  expect(data?.[0]?.artist?.name).toBe(advancedSearch.connections?.[0].query);
  expect(total).toBeGreaterThan(100);
  expect(data.length).toBeGreaterThan(0);
  expect(next).not.toBeNull();
});

test("Tests advanced search with empty connection query", async () => {
  const result: SearchType = await search("", advancedSearchEmptyQuery);

  expect(result.total).toBe(0);
  expect(result?.data?.length).toBe(0);
});
