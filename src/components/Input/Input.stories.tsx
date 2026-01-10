import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'number'],
        },
    },
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
        type: 'text',
    },
}

export const Password: Story = {
    args: {
        placeholder: 'Enter password...',
        type: 'password',
    },
}

export const Email: Story = {
    args: {
        placeholder: 'Enter email...',
        type: 'email',
    },
}
