import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    argTypes: {
        shape: {
            control: 'select',
            options: ['default', 'circle', 'square'],
        },
        size: {
            control: 'select',
            options: ['default', 'icon'],
        },
        variant: {
            control: 'select',
            options: ['default', 'primary', 'destructive', 'warning'],
        },
    },
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Button',
        size: 'default',
        variant: 'default',
    },
}

export const Primary: Story = {
    args: {
        ...Default.args,
        variant: 'primary',
    },
}

export const Destructive: Story = {
    args: {
        ...Default.args,
        variant: 'destructive',
    },
}

export const Warning: Story = {
    args: {
        ...Default.args,
        variant: 'warning',
    },
}

export const Circle: Story = {
    args: {
        ...Default.args,
        children: 'Ok',
        shape: 'circle',
    },
}

export const Icon: Story = {
    args: {
        ...Default.args,
        children: '+',
        size: 'icon',
    },
}
