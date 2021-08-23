import React from "react";
import HomeLogo from "../../../assets/home_logo.png";
import {
  headerContainerStyles,
  headerFavoritesButtonStyles,
  headerHomeLogoButtonStyles,
} from "./header.styles";
import { Link, useRouteMatch } from "react-router-dom";

export const Header: React.FC = () => {
  const { path } = useRouteMatch();
  const showFavoritesLink = path !== "/favorites";
  return (
    <nav className={headerContainerStyles}>
      <Link
        tabIndex={0}
        to="/"
        className={headerHomeLogoButtonStyles}
        aria-roledescription="Navigate Home"
      >
        <img src={HomeLogo} alt="Home Logo" />
      </Link>
      {showFavoritesLink && (
        <Link
          tabIndex={1}
          to="/favorites"
          className={headerFavoritesButtonStyles}
          aria-roledescription="Navigate to favorites"
        >
          View Favorites
        </Link>
      )}
    </nav>
  );
};
