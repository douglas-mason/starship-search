import React from "react";
import { Link } from "react-router-dom";
import { Favorite } from "../types/api.types";
import { StarshipList } from "../_shared/components/starship-list/starship-list.component";
import { useFavorites } from "../_shared/contexts/useFavorites";

interface Props {
  items: Favorite[];
}

export const StarshipFavorites: React.FC<Props> = ({ items }) => {
  const { favorites } = useFavorites();
  return (
    <div>
      <Link to="/">Home</Link>
      <StarshipList items={favorites} />
    </div>
  );
};
