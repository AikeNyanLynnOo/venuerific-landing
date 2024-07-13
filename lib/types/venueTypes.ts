export interface Venue {
  id: string;
  name: string;
  address: string;
  keyword?: string;
  super_venue: boolean;
  price: string;
  rating: number | string;
  total_review: number;
  image?: string;
  standing_guest?: number;
  sitting_guest?: number;
}

export interface LoadingState {
  isPending: boolean | null;
  isComplete: boolean | null;
}
export interface ErrorState {
  message?: string | null;
}

export interface VenueState {
  venues: Venue[];
  loading: LoadingState;
  isSuccess: boolean | null;
  error: ErrorState;
}
