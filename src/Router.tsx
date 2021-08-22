import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { StarshipFavorites } from "./starship-favorites/starship-favorites.page";
import { StarshipListPage } from "./starship-list/starship-list.page";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path={["/", "/list"]} component={StarshipListPage} />
        <Route exact path="/favorites" component={StarshipFavorites} />
      </BrowserRouter>
    </div>
  );
};
