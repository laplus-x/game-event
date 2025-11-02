import type { Meta, StoryObj } from "@storybook/react-vite";

import { KeyState } from "./KeyState";

const meta = {
  title: "Explorer/Screen/KeyState",
  component: KeyState,
} satisfies Meta<typeof KeyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
    max: 3,
  },
};
