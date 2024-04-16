import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  },
};

export default meta;
