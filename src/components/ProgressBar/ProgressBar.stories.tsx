import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta = {
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
        },
        variant: {
            control: 'select',
            options: ['default', 'secondary'],
        },
    },
    component: ProgressBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/ProgressBar',
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        orientation: 'horizontal',
        value: 60,
        variant: 'default',
    },
    decorators: [
        Story => (
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: 200,
                    justifyContent: 'center',
                    width: 300,
                }}
            >
                <Story />
            </div>
        ),
    ],
}

export const Secondary: Story = {
    args: {
        ...Default.args,
        value: 40,
        variant: 'secondary',
    },
    decorators: Default.decorators,
}

export const Vertical: Story = {
    args: {
        ...Default.args,
        orientation: 'vertical',
        value: 70,
    },
    decorators: Default.decorators,
}
