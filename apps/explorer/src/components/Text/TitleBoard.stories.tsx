import type { Meta, StoryObj } from "@storybook/react-vite";

import { TitleBoard } from "./TitleBoard";

const meta = {
  title: "Explorer/Text/TitleBoard",
  component: TitleBoard,
} satisfies Meta<typeof TitleBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "地圖一",
  },
};
