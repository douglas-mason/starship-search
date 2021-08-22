import { StarshipApiResponse } from "../../types/api.types";

export const getStarships = async () => {
  const response = await fetch("https://swapi.dev/api/starships", {
    credentials: "omit",
  }).then((resp) => resp.json());
  return response as StarshipApiResponse;
};
