import { Enemy, Player } from "@explorer/components/Actor";
import { BackgroundImage } from "@explorer/components/Scenery";
import { DialogueBox, KeyState } from "@explorer/components/Screen";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackgroundScene } from "./BackgroundScene";
import { DialogueBoxScene } from "./DialogueBoxScene";
import { EnemyScene } from "./EnemyScene";
import { PlayerScene } from "./PlayerScene";
import { Scene } from "./Scene";
import { StateScene } from "./StateScene";

const meta = {
  title: "Explorer/Scene/BackgroundScene",
  component: BackgroundScene,
  decorators: [
    (Story) => (
      <Scene width={420} height={520}>
        <Story />
        <PlayerScene>
          <Player />
        </PlayerScene>
        <EnemyScene>
          <Enemy />
        </EnemyScene>
        <DialogueBoxScene>
          <DialogueBox />
        </DialogueBoxScene>
        <StateScene>
          <KeyState value={2} />
        </StateScene>
      </Scene>
    ),
  ],
} satisfies Meta<typeof BackgroundScene>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    offset: 0,
    slice: 2,
    children: <BackgroundImage width={6690} height={680} />,
  },
};
