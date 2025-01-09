export class InfoDto {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }

  export class LocationDto {
    name: string;
    url: string;
  }

  export class PersonajeResponseDto {
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

  export class ListaPersonajes {
    info: InfoDto;
    results: PersonajeResponseDto[];
  }