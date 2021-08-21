import React from "react";
import { Starship } from "../types/api.types";
import { StarshipCard } from "./starship-card/starship-card.component";

interface Props {
  items: Starship[];
}

export const StarshipList: React.FC<Props> = ({ items }) => {
  const renderItems = () => {
    return items.map((item) => (
      <StarshipCard starship={item} isFavorite={true} />
    ));
  };
  return <div>{renderItems()}</div>;
};
