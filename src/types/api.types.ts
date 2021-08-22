export interface StarshipApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}

export interface Starship {
  hyperdrive_rating: string;
  manufacturer: string;
  name: string;
  passengers: string;
}

export interface Favorite extends Starship {
  notes: string;
}
