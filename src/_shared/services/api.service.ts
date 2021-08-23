import { StarshipApiResponse } from "../../types/api.types";

export const getStarships = async (
  url: string = "https://swapi.dev/api/starships"
) => {
  const response = await fetch(url).then((resp) => resp.json());
  return response as StarshipApiResponse;
};
