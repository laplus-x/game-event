import type { Meta, StoryObj } from "@storybook/react-vite";

import { SpineBoy } from "./SpineBoy";

const meta = {
  title: "Explorer/Actor/SpineBoy",
  component: SpineBoy,
  argTypes: {
    mode: {
      control: "select",
      options: ["run", "walk", "jump"],
    },
  },
} satisfies Meta<typeof SpineBoy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "run",
    loop: true,
  },
};
