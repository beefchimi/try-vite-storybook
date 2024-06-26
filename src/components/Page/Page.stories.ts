import type {Meta, StoryObj} from '@storybook/react';
import {within, userEvent, expect} from '@storybook/test';

import {Page} from './Page';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export const LoggedOut: Story = {};

// More on interaction testing:
// https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {name: /Log in/i});
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', {name: /Log out/i});
    await expect(logoutButton).toBeInTheDocument();
  },
};

export default meta;
