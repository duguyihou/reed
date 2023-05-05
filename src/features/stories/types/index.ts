type Album_type = 'album' | 'single' | 'compilation';
type External_urls = {
  spotify: string;
};
type Image = {
  url: string;
  height: number;
  width: number;
};
type Release_date_precision = 'year' | 'month' | 'day';
type Reason = 'market' | 'product' | 'explicit';
type Restrictions = {
  reason: Reason;
};

type Type = 'album' | 'artist' | 'track';

type Copyright = {
  text: string;
  type: string;
};
type External_ids = {
  isrc: string;
  ean: string;
  upc: string;
};

type Artist = {
  external_urls: External_urls;
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images?: Image[];
  name: string;
  popularity: number;
  type: Extract<Type, 'artist'>;
  uri: string;
};
type SimplifiedArtistObject = {
  external_urls: External_urls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};
type Linked_from = {
  external_urls: External_urls;
  href: string;
  id: string;
  type: Extract<Type, 'track'>;
  uri: string;
};
type SimplifiedTrackObject = {
  artists: SimplifiedArtistObject[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: External_urls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: Linked_from;
  restrictions: Restrictions;
  name: string;
  preview_url: string;
  track_number: number;
  type: Extract<Type, 'track'>;
  uri: string;
  is_local: boolean;
};

type Tracks = {
  href: string;
  limit: number;
  next: number | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SimplifiedTrackObject[];
};

export type Album = {
  ablum_type: Album_type;
  total_tracks: number;
  available_markets: string[];
  external_urls: External_urls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: Release_date_precision;
  restrictions?: Restrictions;
  type: Extract<Type, 'ablum'>;
  uri: string;
  copyrights?: Copyright[];
  external_ids?: External_ids;
  genres?: string[];
  label?: string;
  popularity?: number;
  artists?: Artist[];
  tracks?: Tracks;
};
