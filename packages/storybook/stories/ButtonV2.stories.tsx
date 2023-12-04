import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@dailydotdev/shared/src/components/buttons/ButtonV2";
import PlusIcon from "@dailydotdev/shared/src/components/icons/Plus";

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
    children: "Add something",
    // TODO: WT-2017 importing the PlusIcon svgs fails 😭
    icon: (
      // <PlusIcon />
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Icon/Plus/Filled</title>
        <g
          id="Icon/Plus/Filled"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <path
            d="M11.8834366,5.006724 C11.386344,5.06446053 11.0004948,5.4869229 11.0004948,5.999505 L11,11 L5.999501,11.0004948 L5.881021,11.0079007 C5.3714473,11.076453 5,11.4984303 5,12 C5,12.4970676 5.36493998,12.9165209 5.852119,12.9886806 L5.981211,12.998835 L11,12.999 L11.0004948,18.000506 L11.0092916,18.129546 C11.0834791,18.6350607 11.5029324,19 12,19 L12.1165634,18.993276 C12.613656,18.9355395 12.9995052,18.5130771 12.9995052,18.000495 L12.999,12.999 L18.000513,12.9995052 L18.118979,12.9920993 C18.6285527,12.923547 19,12.5015697 19,12 C19,11.5029324 18.63506,11.0834791 18.147881,11.0113194 L18.018789,11.001165 L12.999,11 L12.9995052,5.999494 L12.9907084,5.870454 C12.9165209,5.36493931 12.4970676,5 12,5 L11.8834366,5.006724 Z"
            id="Path"
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>
    ),
  },
};
