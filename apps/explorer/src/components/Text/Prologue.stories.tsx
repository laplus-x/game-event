import type { Meta, StoryObj } from "@storybook/react-vite";

import { Prologue } from "./Prologue";

const meta = {
  title: "Explorer/Text/Prologue",
  component: Prologue,
} satisfies Meta<typeof Prologue>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "The Tortoise and the Hare",
  },
};
