import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StarshipList } from "./starship-list.component";
import { mockData } from "../../../__mocks__/starship.mock";

export default {
  title: "Starship/List",
  component: StarshipList,
} as ComponentMeta<typeof StarshipList>;

const Template: ComponentStory<typeof StarshipList> = (args) => (
  <StarshipList {...args} />
);

export const List = Template.bind({});
List.args = {
  items: [mockData, mockData],
};

export const FavoritesList = Template.bind({});
FavoritesList.args = {
  items: [
    {
      ...mockData,
      notes: "This one is interesting",
    },
    {
      ...mockData,
      notes: "Best one in the fleet",
    },
  ],
};
