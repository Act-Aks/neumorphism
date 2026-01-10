import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'primary', 'destructive', 'warning'],
        },
    },
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Badge',
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'default',
    },
}

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'primary',
    },
}

export const Destructive: Story = {
    args: {
        children: 'Destructive',
        variant: 'destructive',
    },
}

export const Warning: Story = {
    args: {
        children: 'Warning',
        variant: 'warning',
    },
}
