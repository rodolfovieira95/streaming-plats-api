// <----------- SEARCH TYPES ----------->
type DeezerSearchOrderType =
  | "RANKING"
  | "TRACK_ASC"
  | "TRACK_DESC"
  | "ARTIST_ASC"
  | "ARTIST_DESC"
  | "ALBUM_ASC"
  | "ALBUM_DESC"
  | "RATING_ASC"
  | "RATING_DESC"
  | "DURATION_ASC"
  | "DURATION_DESC";

type DeezerSearchConnectionType =
  | "artist"
  | "album"
  | "track"
  | "label"
  | "dur_min"
  | "dur_max"
  | "bpm_min"
  | "bpm_max";

type DeezerSearchConnectionsType = {
  connection: DeezerSearchConnectionType;
  query: string | number;
}[];

type DeezerSearchOptionsType = {
  strict?: boolean;
  connections?: DeezerSearchConnectionsType;
  order?: DeezerSearchOrderType;
};

type DeezerSearchDataType = {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: DeezerSearchArtistType;
  album: DeezerSearchAlbumType;
  type: string;
};

type DeezerSearchArtistType = {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
};

type DeezerSearchAlbumType = {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: string;
};

// -----------> SEARCH TYPES <-----------
// <----------- ALBUM TYPES ----------->
type DeezerAlbumType = {
  id: string;
  title: string;
  upc: string;
  link: string;
  share: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id: number;
  genres: { data: DeezerGenreType[] };
  label: string;
  nb_tracks: number;
  duration: number;
  fans: number;
  release_date: string;
  record_type: strin;
  available: boolean;
  alternative?: DeezerAlbum;
  tracklist: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  contributors: DeezerContributorType[];
  artist: DeezerArtistType;
  type: string;
  tracks: { data: DeezerTrackType[] };
};

type DeezerGenreType = {
  id: number;
  name: string;
  picture: string;
  type: string;
};

type DeezerContributorType = {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
  role: string;
};

type DeezerTrackType = {
  id: string;
  readable?: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: string;
  rank: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: DeezerShortArtistType;
  album: DeezerShortAlbumType;
  type: string;
};

type DeezerShortArtistType = Pick<
  DeezerArtistType,
  "id",
  "name",
  "tracklist",
  "type"
>;

type DeezerShortAlbumType = Pick<
  DeezerAlbumType,
  "id",
  "title",
  "cover",
  "cover_small",
  "cover_medium",
  "cover_big",
  "cover_xl",
  "md5_image",
  "tracklist",
  "type"
>;
// -----------> ALBUM TYPES <-----------
// <----------- ARTIST TYPES ----------->
type DeezerArtistShortType = Omit<
  DeezerArtistType,
  "link",
  "share",
  "nb_album",
  "nb_fan",
  "radio"
>;
type DeezerArtistType = {
  id: string;
  name: string;
  link: string;
  share: "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1710822899&utm_medium=web";
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: 35;
  nb_fan: 4602081;
  radio: true;
  tracklist: string;
  type: string;
};

// -----------> ARTIST TYPES <-----------
// <----------- CHART TYPES -----------> // TO DO: Update these types with the actual query outputs
type DeezerChartType = {
  tracks: {
    data: DeezerTrackType[];
    total: number;
  };
  albums: {
    data: DeezerAlbumType[];
    total: number;
  };
  artists: {
    data: DeezerArtistType[];
    total: number;
  };
  playlists: {
    data: DeezerPlaylistType[];
    total: number;
  };
  podcasts: {
    data: DeezerPodcastType[];
    total: number;
  };
};
// -----------> CHART TYPES <-----------
// <----------- GENERAL TYPES ----------->
type DeezerResultType<T> = {
  data?: Array<T>;
  total?: number;
  next?: string;
  error?: DeezerResultErrorType;
};

type DeezerResultErrorType = {
  code: number;
  message: string;
  type: string;
};
// -----------> GENERAL TYPES <-----------
