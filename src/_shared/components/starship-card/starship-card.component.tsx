import React, { useState } from "react";
import { Favorite, Starship } from "../../../types/api.types";
import StarshipImg from "../../../assets/starship.png";
import EmptyHeartImg from "../../../assets/empty_heart.svg";
import FullHeardImg from "../../../assets/full_heart.svg";
import HalfStar from "../../../assets/half_star.svg";
import FullStar from "../../../assets/full_star.svg";
import {
  starshipCardHeartImageStyles,
  starshipCardImageStyles,
  starshipCardInfoContainerStyles,
  starshipCardManufacturerStyles,
  starshipCardNotesContainer,
  starshipCardRatingContainerStyles,
  starshipCardStyles,
  starshipFavoriteButtonStyles,
} from "./starship-card.styles";
import { useEffect } from "react";

interface Props {
  isFavorite?: boolean;
  showNotes?: boolean;
  starship: Starship | Favorite;
  onFavoriteClick: () => void;
  onUpdateNotes?: (item: Favorite, notes?: string | null) => void;
}

export const StarshipCard: React.FC<Props> = ({
  starship,
  isFavorite,
  showNotes,
  onFavoriteClick,
  onUpdateNotes,
}) => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setNotes((starship as Favorite).notes);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getStars = (rating: number) => {
    const starComponents = [];
    let counter = rating;
    const dec = rating % 1;
    if (dec > 0) {
      starComponents.push(<img key="half" alt="Half Star" src={HalfStar} />);
      counter -= dec;
    }
    for (let i = 0; i < counter; i++) {
      starComponents.unshift(<img key={i} alt="Full Star" src={FullStar} />);
    }
    return starComponents;
  };
  const onNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const notes = e.target.value;
    if (onUpdateNotes) {
      onUpdateNotes(starship as Favorite, notes);
      setNotes(notes);
    }
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
          <img alt="Stock Starship" src={StarshipImg} />
        </div>
        <div className={starshipCardHeartImageStyles}>
          <button
            aria-roledescription="Toggle Favorite"
            onClick={onFavoriteClick}
            className={starshipFavoriteButtonStyles}
          >
            <img
              src={isFavorite ? FullHeardImg : EmptyHeartImg}
              alt={isFavorite ? "Favorite" : "Not Favorite"}
            />
          </button>
        </div>
      </div>
      {showNotes && (
        <div className={starshipCardNotesContainer}>
          <textarea
            aria-roledescription="Personal notes"
            value={notes}
            onChange={onNoteChange}
            placeholder="Add text"
          />
        </div>
      )}
    </div>
  );
};
