import { DialogueBox } from "@explorer/components/Screen";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DialogueBoxScene } from "./DialogueBoxScene";
import { Scene } from "./Scene";

const meta = {
  title: "Explorer/Scene/DialogueBoxScene",
  component: DialogueBoxScene,
  decorators: [
    (Story) => (
      <Scene width={420} height={520}>
        <Story />
      </Scene>
    ),
  ],
  argTypes: {
    mode: {
      control: "select",
      options: ["init", "typing", "leave"],
    },
  },
} satisfies Meta<typeof DialogueBoxScene>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "typing",
    children: <DialogueBox />
  },
};
