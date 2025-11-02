import { Enemy } from "@explorer/components/Actor";
import { BackgroundImage } from "@explorer/components/Scenery";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Player } from "../Actor/Player";
import { EnemyScene } from "./EnemyScene";
import { PlayerScene } from "./PlayerScene";
import { Scene } from "./Scene";

const meta = {
  title: "Explorer/Scene/PlayerScene",
  component: PlayerScene,
  decorators: [
    (Story) => (
      <Scene width={420} height={520}>
        <BackgroundImage width={420} height={520} />
        <EnemyScene>
          <Enemy />
        </EnemyScene>
        <Story />
      </Scene>
    ),
  ],
  argTypes: {
    mode: {
      control: "select",
      options: ["init", "move"],
    },
  },
} satisfies Meta<typeof PlayerScene>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "init",
    children: <Player />,
  },
};
