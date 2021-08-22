import React, { useState } from "react";

import { createContext, useContext } from "react";
import { Favorite, Starship } from "../../types/api.types";

interface FavoritesState {
  favorites: Favorite[];
  add: (favorite: Starship) => void;
  remove: (favorite: Favorite) => void;
}

const defaultContext: FavoritesState = {
  favorites: [],
  add: () => {},
  remove: () => {},
};

const FavoritesContext = createContext<FavoritesState>(defaultContext);

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const addToFavorites = (starship: Starship) => {
    setFavorites([
      ...favorites,
      {
        ...starship,
        notes: "",
      },
    ]);
  };
  const removeFromFavorites = (favorite: Favorite) => {
    const mutableFavorites = [...favorites];

    if (!favorites.length) return;
    const indexToRemove = favorites.findIndex((i) => i.name === favorite.name);
    if (indexToRemove > -1) {
      mutableFavorites.splice(indexToRemove, 1);
    }
    setFavorites([...mutableFavorites]);
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        add: addToFavorites,
        remove: removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
