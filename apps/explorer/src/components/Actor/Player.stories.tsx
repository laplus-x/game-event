import type { Meta, StoryObj } from "@storybook/react-vite";

import { Player } from "./Player";

const meta = {
  title: "Explorer/Actor/Player",
  component: Player,
  argTypes: {
    mode: {
      control: "select",
      options: ["idle", "run", "attack"],
    },
  },
} satisfies Meta<typeof Player>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "idle",
  },
};
