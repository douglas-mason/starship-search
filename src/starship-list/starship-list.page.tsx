import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Starship } from "../types/api.types";
import { StarshipList } from "../_shared/components/starship-list/starship-list.component";
import { getStarships } from "../_shared/services/api.service";

interface Props {}

export const StarshipListPage: React.FC<Props> = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  useEffect(() => {
    getStarships().then((resp) => {
      console.info("resp", resp);
      if (resp.results && resp.results.length) {
        setStarships(resp.results);
      }
    });
  }, []);

  return (
    <div>
      <Link to="/favorites">Favorites</Link>
      <StarshipList items={starships} />
    </div>
  );
};
