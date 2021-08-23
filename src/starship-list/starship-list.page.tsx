import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Starship } from "../types/api.types";
import { Header } from "../_shared/components/header/header.component";
import { StarshipList } from "../_shared/components/starship-list/starship-list.component";
import { getStarships } from "../_shared/services/api.service";

interface Props {}

interface PaginationUrls {
  previous: string | null;
  next: string | null;
}

export const StarshipListPage: React.FC<Props> = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [paginationUrls, setPaginationUrls] = useState<PaginationUrls>();

  const populateStarships = useCallback((url?: string | null) => {
    getStarships(url !== null ? url : undefined).then((resp) => {
      if (resp.results && resp.results.length) {
        setStarships(resp.results);
        setPaginationUrls({
          previous: resp.previous,
          next: resp.next,
        });
      }
    });
  }, []);

  useEffect(() => {
    populateStarships();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePreviousClick = paginationUrls?.previous
    ? () => populateStarships(paginationUrls.previous)
    : undefined;
  const handleNextClick = paginationUrls?.next
    ? () => populateStarships(paginationUrls.next)
    : undefined;

  return (
    <div>
      <Header />
      <h1>Starship List</h1>
      <StarshipList
        items={starships}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
    </div>
  );
};
