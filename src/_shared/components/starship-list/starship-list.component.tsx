import React from "react";
import { Favorite, Starship } from "../../../types/api.types";
import { StarshipCard } from "../../components/starship-card/starship-card.component";
import { useFavorites } from "../../contexts/useFavorites";
import {
  starshipListContainerStyles,
  starshipListItemStyles,
  starshipListPaginationButtonStyles,
  starshipListPaginationContainerStyles,
} from "./starship-list.styles";

interface Props {
  items: Starship[] | Favorite[];
  showCardNotes?: boolean;
  onPreviousClick?: () => void;
  onNextClick?: () => void;
}

export const StarshipList: React.FC<Props> = ({
  items,
  onPreviousClick,
  onNextClick,
  showCardNotes,
}) => {
  const { favorites, add, remove, update } = useFavorites();

  const renderItems = () => {
    return items.map((item) => {
      const favoriteMatch = favorites.find(
        (favorite) => item.name === favorite.name
      );
      const handleFavoriteClick = () => {
        if (favoriteMatch) {
          remove(favoriteMatch);
          return;
        }
        add(item);
      };

      const updateNotes = (item: Favorite, notes?: string | null) => {
        if (notes) {
          update(item.name, notes);
        }
      };

      return (
        <div className={starshipListItemStyles}>
          <StarshipCard
            key={item.name}
            starship={item}
            showNotes={showCardNotes}
            onUpdateNotes={updateNotes}
            isFavorite={!!favoriteMatch}
            onFavoriteClick={handleFavoriteClick}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <div className={starshipListContainerStyles}>{renderItems()}</div>
      <div className={starshipListPaginationContainerStyles}>
        {onPreviousClick && (
          <button
            aria-roledescription="Previous Page"
            className={starshipListPaginationButtonStyles}
            onClick={onPreviousClick}
          >
            {"<"}
          </button>
        )}
        {onNextClick && (
          <button
            aria-roledescription="Next Page"
            className={starshipListPaginationButtonStyles}
            onClick={onNextClick}
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};
