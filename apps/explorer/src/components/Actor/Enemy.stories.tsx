import type { Meta, StoryObj } from "@storybook/react-vite";

import { Enemy } from "./Enemy";

const meta = {
  title: "Explorer/Actor/Enemy",
  component: Enemy,
} satisfies Meta<typeof Enemy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 0,
  },
};
