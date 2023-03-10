export interface Pokemon {
  id: number;
  url: string;
  name: string;
  // sprites: {
  //   front_default: string;
  // };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface Category {
  name: string;
  url: string;
}
