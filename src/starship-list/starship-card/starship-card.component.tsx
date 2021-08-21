import React from "react";
import { Starship } from "../../types/api.types";
import StarshipImg from "../../assets/starship.png";
import EmptyHeartImg from "../../assets/empty_heart.svg";
import FullHeardImg from "../../assets/full_heart.svg";
import HalfStar from "../../assets/half_star.svg";
import FullStar from "../../assets/full_star.svg";
import {
  starshipCardHeartImageStyles,
  starshipCardImageStyles,
  starshipCardInfoContainerStyles,
  starshipCardManufacturerStyles,
  starshipCardNotesContainer,
  starshipCardRatingContainerStyles,
  starshipCardStyles,
} from "./starship-card.styles";

interface Props {
  isFavorite: boolean;
  starship: Starship;
}

export const StarshipCard: React.FC<Props> = ({ starship, isFavorite }) => {
  const getStars = (rating: number) => {
    const starComponents = [];
    let counter = rating;
    const dec = rating % 1;
    if (dec > 0) {
      starComponents.push(<img src={HalfStar} />);
      counter -= dec;
    }
    for (let i = 0; i < counter; i++) {
      starComponents.unshift(<img src={FullStar} />);
    }
    return starComponents;
  };

  return (
    <div className={starshipCardStyles}>
      <div className={starshipCardInfoContainerStyles}>
        <div>
          <h2>{starship.name}</h2>
          <div className={starshipCardManufacturerStyles}>
            {starship.manufacturer}
          </div>
          <div className={starshipCardRatingContainerStyles}>
            {getStars(Number(starship.hyperdrive_rating))}
          </div>
          <div>Passengers: {starship.passengers}</div>
        </div>
        <div className={starshipCardImageStyles}>
          <img alt="Stock Starship photo" src={StarshipImg} />
        </div>
        <div className={starshipCardHeartImageStyles}>
          <img
            src={isFavorite ? FullHeardImg : EmptyHeartImg}
            alt={isFavorite ? "Favorite" : "Not Favorite"}
          />
        </div>
      </div>
      {isFavorite && (
        <div className={starshipCardNotesContainer}>
          <textarea placeholder="Add text" />
        </div>
      )}
    </div>
  );
};
