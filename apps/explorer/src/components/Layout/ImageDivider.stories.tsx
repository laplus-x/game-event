import image from "@explorer/components/Modal/assets/border-diamonds.png";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { ImageDivider } from "./ImageDivider";

const meta = {
  title: "Explorer/Layout/ImageDivider",
  component: ImageDivider,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "middle", "large"],
    },
  },
} satisfies Meta<typeof ImageDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "middle",
    image: image,
    slice: 30,
  },
};
