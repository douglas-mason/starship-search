import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import {
  Card,
  FavoriteCard,
  FavoriteCardWithNotes,
  HalfStarRatingCard,
} from "./starship-card.stories";

describe("starship card", () => {
  it("renders the favorite button if favorited", () => {
    render(<FavoriteCard {...FavoriteCard.args} />);
    expect(screen.getByAltText("Favorite")).toBeDefined();
  });

  it("renders the unfavorite button if not favorited", () => {
    render(<Card {...Card.args} />);
    expect(screen.getByAltText("Not Favorite")).toBeDefined();
  });

  it("renders the notes field", () => {
    render(<FavoriteCardWithNotes {...FavoriteCardWithNotes.args} />);
    expect(screen.getByPlaceholderText("Add text")).toBeDefined();
  });

  it("renders appropriate star rating", () => {
    render(<HalfStarRatingCard {...HalfStarRatingCard.args} />);
    expect(screen.getAllByAltText("Full Star")).toHaveLength(3);
    expect(screen.getAllByAltText("Half Star")).toHaveLength(1);
  });
});
