import type { Meta, StoryObj } from "@storybook/react-vite";

import { DialogueBox } from "./DialogueBox";

const meta = {
  title: "Explorer/Screen/DialogueBox",
  component: DialogueBox,
} satisfies Meta<typeof DialogueBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: `The Tortoise and the Hare.`,
    onFinish: () => console.log("onFinish"),
  },
};
