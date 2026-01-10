import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const meta = {
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <Tabs className='w-[400px]' defaultValue='account'>
            <Tabs.TabList>
                <Tabs.Tab value='account'>Account</Tabs.Tab>
                <Tabs.Tab value='password'>Password</Tabs.Tab>
            </Tabs.TabList>
            <Tabs.TabPanel value='account'>
                <div className='mt-2 rounded-lg border border-border p-4'>
                    <h3 className='font-bold text-lg'>Account</h3>
                    <p className='text-muted-foreground'>Make changes to your account here.</p>
                </div>
            </Tabs.TabPanel>
            <Tabs.TabPanel value='password'>
                <div className='mt-2 rounded-lg border border-border p-4'>
                    <h3 className='font-bold text-lg'>Password</h3>
                    <p className='text-muted-foreground'>Change your password here.</p>
                </div>
            </Tabs.TabPanel>
        </Tabs>
    ),
}
