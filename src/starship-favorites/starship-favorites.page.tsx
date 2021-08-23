import React from "react";
import { Favorite } from "../types/api.types";
import { Header } from "../_shared/components/header/header.component";
import { StarshipList } from "../_shared/components/starship-list/starship-list.component";
import { useFavorites } from "../_shared/contexts/useFavorites";

interface Props {
  items: Favorite[];
}

export const StarshipFavorites: React.FC<Props> = ({ items }) => {
  const { favorites } = useFavorites();
  return (
    <div>
      <Header />
      <h1>Favorites</h1>
      <StarshipList items={favorites} showCardNotes />
    </div>
  );
};
