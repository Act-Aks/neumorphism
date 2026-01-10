import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta = {
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary'],
        },
    },
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        defaultValue: 50,
        max: 100,
        min: 0,
        variant: 'default',
    },
    decorators: [
        Story => (
            <div className='w-[300px] p-4'>
                <Story />
            </div>
        ),
    ],
}

export const Secondary: Story = {
    args: {
        ...Default.args,
        defaultValue: 75,
        variant: 'secondary',
    },
    decorators: Default.decorators,
}
