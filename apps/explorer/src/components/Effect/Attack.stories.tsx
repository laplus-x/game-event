import type { Meta, StoryObj } from "@storybook/react-vite";

import { Attack } from "./Attack";

const meta = {
  title: "Explorer/Effect/Attack",
  component: Attack,
  argTypes: {
    mode: {
      control: "select",
      options: ["init", "slash"],
    },
  },
} satisfies Meta<typeof Attack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
