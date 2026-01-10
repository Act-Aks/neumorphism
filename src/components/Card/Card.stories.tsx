import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
    argTypes: {
        variant: {
            control: 'select',
            options: ['raised', 'inset'],
        },
    },
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'raised',
    },
    render: args => (
        <Card {...args} className='w-[350px]'>
            <Card.Header>
                <Card.Title>Card Title</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>This is the content of the card.</p>
            </Card.Content>
            <Card.Footer>
                <p>Card Footer</p>
            </Card.Footer>
        </Card>
    ),
}

export const WithInputs: Story = {
    render: args => (
        <Card {...args} className='w-[350px]'>
            <Card.Header>
                <Card.Title>Login</Card.Title>
                <Card.Description>Enter your credentials to login.</Card.Description>
            </Card.Header>
            <Card.Content className='space-y-2'>
                <div className='space-y-1'>
                    <label className='font-medium text-sm' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        id='email'
                        placeholder='m@example.com'
                    />
                </div>
                <div className='space-y-1'>
                    <label className='font-medium text-sm' htmlFor='password'>
                        Password
                    </label>
                    <input
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                        id='password'
                        type='password'
                    />
                </div>
            </Card.Content>
            <Card.Footer>
                <button
                    className='inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
                    type='button'
                >
                    Sign In
                </button>
            </Card.Footer>
        </Card>
    ),
}
