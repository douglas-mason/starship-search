import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StarshipCard } from "./starship-card.component";
import { Starship } from "../../types/api.types";

const mockData: Starship = {
  hyperdrive_rating: "4.0",
  manufacturer:
    "Imperial Department of Military Research, Sienar Fleet Systems",
  name: "Death Star",
  passengers: "843342",
};

export default {
  title: "Starship/Card",
  component: StarshipCard,
} as ComponentMeta<typeof StarshipCard>;

const Template: ComponentStory<typeof StarshipCard> = (args) => (
  <StarshipCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  isFavorite: false,
  starship: mockData,
};

export const FavoriteCard = Template.bind({});
FavoriteCard.args = {
  isFavorite: true,
  starship: mockData,
};

export const HalfStarRatingCard = Template.bind({});
HalfStarRatingCard.args = {
  starship: {
    ...mockData,
    hyperdrive_rating: "3.5",
  },
};
