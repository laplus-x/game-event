import type { Meta, StoryObj } from "@storybook/react-vite";

import { DialogueBox } from "./DialogueBox";

const meta = {
  title: "Explorer/Box/DialogueBox",
  component: DialogueBox,
} satisfies Meta<typeof DialogueBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: `The Tortoise and the Hare.
Once upon a time, in a vast and bustling forest, lived a speedy hare who boasted about how fast he could run.
Tired of hearing the hare's bragging, a slow but wise tortoise challenged him to a race.
The hare, bursting with laughter, accepted the challenge, thinking it was an easy win.`,
    onFinish: () => console.log("onFinish"),
  },
};
