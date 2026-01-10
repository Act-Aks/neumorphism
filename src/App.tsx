import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { Activity, useReducer, useState } from 'react'
import { Button, Card, Checkbox, Input, Nav, ProgressBar } from '@/components'

function App() {
    const [isPlaying, togglePlay] = useReducer(playing => !playing, false)
    const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro'>('free')

    return (
        <main>
            <Nav />
            {/* Hero Section */}
            <section className='mx-auto max-w-4xl gap-1 px-8 py-12 pb-12 text-center'>
                <h1 className='font-semibold text-xl tracking-tight md:text-3xl'>
                    Beautiful components with neumorphic design
                </h1>
                <p className='text-muted-foreground text-sm md:text-lg'>
                    Crafted with care and attention to details. Built on top of Base UI with
                    Tailwind CSS. Accessible, customizable and ready to use in your projects.
                </p>
            </section>
            <section className='mx-auto my-12 flex max-w-7xl flex-col items-start gap-8 md:flex-row'>
                <div className='flex-1 space-y-6'>
                    <Card>
                        <Card.Header>
                            <Card.Title>Music Player</Card.Title>
                            <Card.Description>Enjoy high quality music</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <div className='flex flex-col items-center space-y-8'>
                                {/** biome-ignore lint/correctness/useImageSize: In className */}
                                <img
                                    alt='gorillaz'
                                    className={`h-56 w-56 rounded-full border-4 border-border shadow-raised ${isPlaying ? 'animate-spin' : ''}`}
                                    src='https://www.normanrecords.com/artwork/medium/233/115233-gorillaz-gorillaz.jpg'
                                />
                                <div className='space-y-2 text-center'>
                                    <Card.Title>Feel good inc.</Card.Title>
                                    <Card.Description>Gorillaz</Card.Description>
                                </div>
                                <div className='w-full'>
                                    <ProgressBar max={100} value={45} />
                                    <div className='mt-2 flex justify-between text-muted-foreground text-xs'>
                                        <span>0:00</span>
                                        <span>3:32</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-4'>
                                    <Button
                                        aria-label='Previous Track'
                                        shape={'circle'}
                                        size={'icon'}
                                        variant={'primary'}
                                    >
                                        <SkipBack className='h-4 w-4' />
                                    </Button>
                                    <Button
                                        aria-label={isPlaying ? 'Pause' : 'Play'}
                                        className='w-20'
                                        onClick={togglePlay}
                                        shape={'circle'}
                                        size={'icon'}
                                        variant={'primary'}
                                    >
                                        <Activity mode={isPlaying ? 'hidden' : 'visible'}>
                                            <Play className='h-4 w-4' />
                                        </Activity>
                                        <Activity mode={isPlaying ? 'visible' : 'hidden'}>
                                            <Pause className='h-4 w-4' />
                                        </Activity>
                                    </Button>
                                    <Button
                                        aria-label='Next Track'
                                        shape={'circle'}
                                        size={'icon'}
                                        variant={'primary'}
                                    >
                                        <SkipForward className='h-4 w-4' />
                                    </Button>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>Upgrade your subscription</Card.Title>
                            <Card.Description>
                                Your current plan is free. Upgrade to pro to enjoy all the features.
                            </Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <div className='space-y-1'>
                                <Card.Title>Plan </Card.Title>
                                <Card.Description>
                                    Select the plan that best suites your needs
                                </Card.Description>
                                <div className='mt-4 grid grid-cols-2 gap-4'>
                                    <button
                                        className={`flex cursor-pointer flex-col rounded-lg border-3 border-border p-4 transition-all duration-350 ${selectedPlan === 'free' ? 'bg-primary/10 shadow-inset' : 'bg-background shadow-raised'}`}
                                        onClick={() => setSelectedPlan('free')}
                                        type='button'
                                    >
                                        <div className='flex items-center space-x-2'>
                                            <Checkbox
                                                checked={selectedPlan === 'free'}
                                                id={'free-plan'}
                                            />
                                            <span className='text-sm'>Free plan</span>
                                        </div>
                                    </button>
                                    <button
                                        className={`flex cursor-pointer flex-col rounded-lg border-3 border-border p-4 transition-all duration-350 ${selectedPlan === 'pro' ? 'bg-primary/10 shadow-inset' : 'bg-background shadow-raised'}`}
                                        onClick={() => setSelectedPlan('pro')}
                                        type='button'
                                    >
                                        <div className='flex items-center space-x-2'>
                                            <Checkbox
                                                checked={selectedPlan === 'pro'}
                                                id={'pro-plan'}
                                            />
                                            <span className='text-sm'>Pro plan</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label
                                    className='mb-2 block text-muted-foreground text-xs'
                                    htmlFor='notes'
                                >
                                    Notes
                                </label>
                                <Input id='notes' placeholder='Notes' />
                                <div className='mt-4 flex items-center gap-2'>
                                    <Checkbox checked id='terms' />
                                    <label htmlFor='terms'>
                                        I agree to the terms and conditions.
                                    </label>
                                </div>
                            </div>
                        </Card.Content>
                        <Card.Footer className='flex gap-4'>
                            <Button variant={'destructive'}>Cancel</Button>
                            <Button variant={'primary'}>Upgrade plan</Button>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='flex-1 space-y-6'>
                    <Card>
                        <Card.Header>
                            <Card.Title>Total Revenue</Card.Title>
                            <Card.Title className='font-bold text-3xl'>$12,236.98</Card.Title>
                            <Card.Description>+201% from last month</Card.Description>
                        </Card.Header>
                    </Card>
                </div>
            </section>
        </main>
    )
}

export default App
