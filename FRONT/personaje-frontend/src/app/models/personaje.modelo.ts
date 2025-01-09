export interface InfoDto {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }

  export interface LocationDto {
    name: string;
    url: string;
  }

  export interface PersonajeResponseDto {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationDto;
    location: LocationDto;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  export interface ListaPersonajes {
    info: InfoDto;
    results: PersonajeResponseDto[];
  }