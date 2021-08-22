import React from "react";
import { Favorite, Starship } from "../../../types/api.types";
import { StarshipCard } from "../../components/starship-card/starship-card.component";
import { useFavorites } from "../../contexts/useFavorites";

interface Props {
  items: Starship[] | Favorite[];
}

export const StarshipList: React.FC<Props> = ({ items }) => {
  const { favorites, add, remove } = useFavorites();

  const renderItems = () => {
    return items.map((item) => {
      const favoriteMatch = favorites.find(
        (favorite) => item.name === favorite.name
      );
      const handleFavoriteClick = () => {
        console.log("clicked", favoriteMatch, !!favoriteMatch);
        if (favoriteMatch) {
          remove(favoriteMatch);
          return;
        }
        add(item);
      };
      return (
        <StarshipCard
          key={item.name}
          starship={item}
          isFavorite={!!favoriteMatch}
          onFavoriteClick={handleFavoriteClick}
        />
      );
    });
  };
  return <div>{renderItems()}</div>;
};
