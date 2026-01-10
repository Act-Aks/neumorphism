import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@/providers/ThemeProvider/ThemeProvider'
import { Nav } from './Nav'

const meta = {
    component: Nav,
    decorators: [
        Story => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/Nav',
} satisfies Meta<typeof Nav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
