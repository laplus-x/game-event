import type { Meta, StoryObj } from "@storybook/react-vite";

import clsx from "clsx";
import { Fade } from "./Fade";

const meta = {
  title: "Explorer/Animate/Fade",
  component: Fade,
} satisfies Meta<typeof Fade>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: false,
    children: <div className={clsx("w-full", "h-[200px]", "bg-gray-700")} />,
  },
};
