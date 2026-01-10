import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './Switch'

const meta = {
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Switch',
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = useState(false)
        return (
            <div className='flex items-center space-x-2'>
                <Switch checked={checked} id='airplane-mode' onCheckedChange={setChecked} />
                <label
                    className='font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='airplane-mode'
                >
                    Airplane Mode
                </label>
            </div>
        )
    },
}

export const Checked: Story = {
    render: () => (
        <div className='flex items-center space-x-2'>
            <Switch checked id='checked-mode' />
            <label
                className='font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='checked-mode'
            >
                Active
            </label>
        </div>
    ),
}
