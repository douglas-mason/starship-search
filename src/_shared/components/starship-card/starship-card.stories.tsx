import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StarshipCard } from "./starship-card.component";
import { mockData } from "../../../__mocks__/starship.mock";

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

export const FavoriteCardWithNotes = Template.bind({});
FavoriteCardWithNotes.args = {
  isFavorite: true,
  starship: mockData,
  showNotes: true,
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
