import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  ButtonVariant,
} from "../../shared/src/components/buttons/ButtonV2";
import PlusIcon from "../../shared/src/components/icons/Plus";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    href: {
      control: "text",
    },
    onClick: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: (props) => <Button {...props}>{props.children}</Button>,
  name: "Basic",
  args: {
    children: "Click me",
    onClick: () => {
      // eslint-disable-next-line no-alert -- alert for demo
      alert("Hello!");
    },
  },
};

export const Icon: Story = {
  render: (props) => <Button {...props}>{props.children}</Button>,
  name: "Icon",
  args: {
    children: "Hello",
    // TODO: WT-2017 importing the PlusIcon svgs fails 😭
    icon: <PlusIcon />,
  },
};
