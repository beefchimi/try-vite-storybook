import type {Meta, StoryObj} from '@storybook/react';

import {Header} from './Header';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};

export default meta;
