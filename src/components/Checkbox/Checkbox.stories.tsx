import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './Checkbox'

const meta = {
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = useState(false)
        return (
            <div className='flex items-center space-x-2'>
                <Checkbox checked={checked} id='terms' onCheckedChange={setChecked} />
                <label
                    className='font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='terms'
                >
                    Accept terms and conditions
                </label>
            </div>
        )
    },
}

export const Checked: Story = {
    render: () => (
        <div className='flex items-center space-x-2'>
            <Checkbox checked id='checked' />
            <label
                className='font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='checked'
            >
                Checked
            </label>
        </div>
    ),
}
