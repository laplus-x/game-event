import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExploreButton } from "./ExploreButton";

const meta = {
  title: "Explorer/Button/ExploreButton",
  component: ExploreButton,
} satisfies Meta<typeof ExploreButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cost: 25,
    time: 100,
    disabled: false,
    onClick: () => console.log("onClick"),
  },
};
