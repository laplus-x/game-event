import type { Meta, StoryObj } from "@storybook/react-vite";

import { Typewriter } from "./Typewriter";

const meta = {
  title: "Explorer/Motion/Typewriter",
  component: Typewriter,
} satisfies Meta<typeof Typewriter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: `The Tortoise and the Hare.
Once upon a time, in a vast and bustling forest, lived a speedy hare who boasted about how fast he could run.`,
    delay: 100,
    onComplete: () => console.log("onComplete"),
  },
};
