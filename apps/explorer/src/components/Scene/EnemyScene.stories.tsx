import { Enemy, Player } from "@explorer/components/Actor";
import { BackgroundImage } from "@explorer/components/Scenery";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EnemyScene } from "./EnemyScene";
import { PlayerScene } from "./PlayerScene";
import { Scene } from "./Scene";

const meta = {
  title: "Explorer/Scene/EnemyScene",
  component: EnemyScene,
  decorators: [
    (Story) => (
      <Scene width={420} height={520}>
        <BackgroundImage width={420} height={520} />
        <PlayerScene>
          <Player />
        </PlayerScene>
        <Story />
      </Scene>
    ),
  ],
  argTypes: {
    mode: {
      control: "select",
      options: ["init", "move", "leave"],
    },
  },
} satisfies Meta<typeof EnemyScene>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "init",
    children: <Enemy />,
  },
};
