import type { Meta, StoryObj } from "@storybook/react-vite";

import { StageBackground } from "./StageBackground";

const meta = {
  title: "Explorer/Motion/StageBackground",
  component: StageBackground,
} satisfies Meta<typeof StageBackground>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stage: 1,
    wave: 0,
    width: 576,
    height: 324,
  },
};
