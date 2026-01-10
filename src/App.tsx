import {
    Download,
    Heart,
    Lock,
    Mail,
    Pause,
    Play,
    Settings,
    Shield,
    SkipBack,
    SkipForward,
    Sparkles,
    Star,
    User,
    Zap,
} from 'lucide-react'
import { Activity, useReducer, useState } from 'react'
import {
    Badge,
    Button,
    Card,
    Checkbox,
    Input,
    Nav,
    ProgressBar,
    Slider,
    Switch,
    Tabs,
} from '@/components'

function App() {
    const [isPlaying, togglePlay] = useReducer(playing => !playing, false)
    const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro'>('free')
    const [sliderValue, setSliderValue] = useState(50)
    const [isSwitchOn, setSwitchOn] = useState(false)
    const [progressValue] = useState(65)

    return (
        <main className='min-h-screen bg-background'>
            <Nav />

            {/* Hero Section */}
            <section className='relative overflow-hidden px-8 py-24'>
                <div className='mx-auto max-w-7xl'>
                    {/* Hero Content */}
                    <div className='mb-16 space-y-8 text-center'>
                        <div className='space-y-4'>
                            <Badge className='mb-4' variant='primary'>
                                <Sparkles className='mr-2 h-4 w-4' />
                                Neomorphic Design System
                            </Badge>
                            <h1 className='bg-linear-to-br from-foreground to-muted-foreground bg-clip-text font-extrabold text-5xl text-transparent tracking-tight md:text-7xl'>
                                Beautiful Components
                            </h1>
                            <p className='mx-auto max-w-3xl text-muted-foreground text-xl leading-relaxed md:text-2xl'>
                                Crafted with care and attention to detail. Built on top of Base UI
                                with Tailwind CSS. Accessible, customizable, and ready to use in
                                your projects.
                            </p>
                        </div>

                        <div className='mt-12 flex flex-wrap justify-center gap-4'>
                            <Button className='group' size='default' variant='primary'>
                                <Download className='mr-2 h-4 w-4 group-hover:animate-bounce' />
                                Get Started
                            </Button>
                            <Button size='default' variant='default'>
                                <Star className='mr-2 h-4 w-4' />
                                View Components
                            </Button>
                            <Button size='default' variant='warning'>
                                <Settings className='mr-2 h-4 w-4' />
                                Customize
                            </Button>
                        </div>
                    </div>

                    {/* Component Showcase Grid */}
                    <div className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {/* Buttons Showcase */}
                        <Card className='p-6'>
                            <Card.Header>
                                <Card.Title className='flex items-center gap-2'>
                                    <Zap className='h-5 w-5 text-primary' />
                                    Buttons
                                </Card.Title>
                                <Card.Description>
                                    Interactive buttons with multiple variants and states
                                </Card.Description>
                            </Card.Header>
                            <Card.Content className='space-y-4'>
                                <div className='flex flex-wrap gap-2'>
                                    <Button size='default' variant='primary'>
                                        Primary
                                    </Button>
                                    <Button size='default' variant='default'>
                                        Default
                                    </Button>
                                    <Button size='default' variant='warning'>
                                        Warning
                                    </Button>
                                    <Button size='default' variant='destructive'>
                                        Danger
                                    </Button>
                                </div>
                                <div className='flex gap-2'>
                                    <Button shape='circle' size='icon' variant='primary'>
                                        <Heart className='h-4 w-4' />
                                    </Button>
                                    <Button shape='circle' size='icon' variant='default'>
                                        <User className='h-4 w-4' />
                                    </Button>
                                    <Button shape='circle' size='icon' variant='warning'>
                                        <Mail className='h-4 w-4' />
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>

                        {/* Badges Showcase */}
                        <Card className='p-6'>
                            <Card.Header>
                                <Card.Title className='flex items-center gap-2'>
                                    <Shield className='h-5 w-5 text-primary' />
                                    Badges
                                </Card.Title>
                                <Card.Description>
                                    Status indicators and labels for your content
                                </Card.Description>
                            </Card.Header>
                            <Card.Content className='space-y-4'>
                                <div className='flex flex-wrap gap-2'>
                                    <Badge variant='default'>Default</Badge>
                                    <Badge variant='primary'>Primary</Badge>
                                    <Badge variant='warning'>Warning</Badge>
                                    <Badge variant='destructive'>Error</Badge>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    <Badge variant='primary'>
                                        <Star className='mr-1 h-3 w-3' />
                                        Featured
                                    </Badge>
                                    <Badge variant='warning'>
                                        <Lock className='mr-1 h-3 w-3' />
                                        Premium
                                    </Badge>
                                </div>
                            </Card.Content>
                        </Card>

                        {/* Form Controls */}
                        <Card className='p-6'>
                            <Card.Header>
                                <Card.Title>Form Controls</Card.Title>
                                <Card.Description>
                                    Interactive form elements with neomorphic styling
                                </Card.Description>
                            </Card.Header>
                            <Card.Content className='space-y-4'>
                                <Input placeholder='Enter your email...' />
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm'>Enable notifications</span>
                                    <Switch checked={isSwitchOn} onCheckedChange={setSwitchOn} />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Checkbox checked id='terms-hero' />
                                    <label className='text-sm' htmlFor='terms-hero'>
                                        I agree to the terms
                                    </label>
                                </div>
                            </Card.Content>
                        </Card>

                        {/* Slider & Progress */}
                        <Card className='p-6'>
                            <Card.Header>
                                <Card.Title>Interactive Controls</Card.Title>
                                <Card.Description>Sliders and progress indicators</Card.Description>
                            </Card.Header>
                            <Card.Content className='space-y-6'>
                                <div>
                                    <label
                                        className='mb-2 block text-muted-foreground text-sm'
                                        htmlFor='volume-slider'
                                    >
                                        Volume: {sliderValue}%
                                    </label>
                                    <Slider
                                        id='volume-slider'
                                        max={100}
                                        onValueChange={value =>
                                            setSliderValue(Array.isArray(value) ? value[0] : value)
                                        }
                                        value={sliderValue}
                                    />
                                </div>
                                <div>
                                    <label
                                        className='mb-2 block text-muted-foreground text-sm'
                                        htmlFor='progress-bar'
                                    >
                                        Progress: {progressValue}%
                                    </label>
                                    <ProgressBar
                                        id='progress-bar'
                                        max={100}
                                        value={progressValue}
                                    />
                                </div>
                            </Card.Content>
                        </Card>

                        {/* Tabs Example */}
                        <Card className='p-6'>
                            <Card.Header>
                                <Card.Title>Navigation Tabs</Card.Title>
                                <Card.Description>
                                    Organize content with beautiful tabs
                                </Card.Description>
                            </Card.Header>
                            <Card.Content>
                                <Tabs>
                                    <Tabs.TabList>
                                        <Tabs.Tab value='overview'>Overview</Tabs.Tab>
                                        <Tabs.Tab value='features'>Features</Tabs.Tab>
                                        <Tabs.Tab value='pricing'>Pricing</Tabs.Tab>
                                        <Tabs.TabIndicator />
                                    </Tabs.TabList>
                                    <Tabs.TabPanel className='mt-4' value='overview'>
                                        <p className='text-muted-foreground text-sm'>
                                            Complete overview of all components and features
                                            available in this library.
                                        </p>
                                    </Tabs.TabPanel>
                                    <Tabs.TabPanel className='mt-4' value='features'>
                                        <p className='text-muted-foreground text-sm'>
                                            Accessible, customizable, and built with modern web
                                            standards.
                                        </p>
                                    </Tabs.TabPanel>
                                    <Tabs.TabPanel className='mt-4' value='pricing'>
                                        <p className='text-muted-foreground text-sm'>
                                            Free and open source. Use in any project without
                                            restrictions.
                                        </p>
                                    </Tabs.TabPanel>
                                </Tabs>
                            </Card.Content>
                        </Card>

                        {/* Music Player Demo */}
                        <Card className='p-6'>
                            <Card.Header>
                                <Card.Title>Music Player Demo</Card.Title>
                                <Card.Description>
                                    Complex component composition example
                                </Card.Description>
                            </Card.Header>
                            <Card.Content>
                                <div className='flex flex-col items-center space-y-4'>
                                    <img
                                        alt='Album Cover'
                                        className={`h-20 w-20 rounded-full border-2 border-border shadow-raised ${isPlaying ? 'animate-spin' : ''}`}
                                        height={80}
                                        src='https://www.normanrecords.com/artwork/medium/233/115233-gorillaz-gorillaz.jpg'
                                        width={80}
                                    />
                                    <div className='text-center'>
                                        <p className='font-medium text-sm'>Feel Good Inc.</p>
                                        <p className='text-muted-foreground text-xs'>Gorillaz</p>
                                    </div>
                                    <ProgressBar className='w-full' max={100} value={45} />
                                    <div className='flex items-center gap-2'>
                                        <Button
                                            aria-label='Previous'
                                            shape='circle'
                                            size='icon'
                                            variant='default'
                                        >
                                            <SkipBack className='h-3 w-3' />
                                        </Button>
                                        <Button
                                            aria-label={isPlaying ? 'Pause' : 'Play'}
                                            onClick={togglePlay}
                                            shape='circle'
                                            size='icon'
                                            variant='primary'
                                        >
                                            <Activity mode={isPlaying ? 'hidden' : 'visible'}>
                                                <Play className='h-3 w-3' />
                                            </Activity>
                                            <Activity mode={isPlaying ? 'visible' : 'hidden'}>
                                                <Pause className='h-3 w-3' />
                                            </Activity>
                                        </Button>
                                        <Button
                                            aria-label='Next'
                                            shape='circle'
                                            size='icon'
                                            variant='default'
                                        >
                                            <SkipForward className='h-3 w-3' />
                                        </Button>
                                    </div>
                                </div>
                            </Card.Content>
                        </Card>
                    </div>

                    {/* Feature Highlights */}
                    <div className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
                        <div className='space-y-4 text-center'>
                            <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shadow-raised'>
                                <Sparkles className='h-8 w-8 text-primary' />
                            </div>
                            <h3 className='font-semibold text-xl'>Neomorphic Design</h3>
                            <p className='text-muted-foreground'>
                                Beautiful soft UI elements that feel tactile and modern
                            </p>
                        </div>
                        <div className='space-y-4 text-center'>
                            <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shadow-raised'>
                                <Shield className='h-8 w-8 text-primary' />
                            </div>
                            <h3 className='font-semibold text-xl'>Accessible</h3>
                            <p className='text-muted-foreground'>
                                Built with accessibility in mind, following WCAG guidelines
                            </p>
                        </div>
                        <div className='space-y-4 text-center'>
                            <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shadow-raised'>
                                <Zap className='h-8 w-8 text-primary' />
                            </div>
                            <h3 className='font-semibold text-xl'>Customizable</h3>
                            <p className='text-muted-foreground'>
                                Easy to customize with CSS variables and Tailwind classes
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Examples Section */}
            <section className='bg-muted/5 px-8 py-16'>
                <div className='mx-auto max-w-7xl'>
                    <div className='mb-12 text-center'>
                        <h2 className='mb-4 font-bold text-3xl'>Real-World Examples</h2>
                        <p className='text-lg text-muted-foreground'>
                            See how these components work together in practical applications
                        </p>
                    </div>

                    <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                        {/* Music Player Card */}
                        <Card className='p-8'>
                            <Card.Header>
                                <Card.Title>Music Player</Card.Title>
                                <Card.Description>Enjoy high quality music</Card.Description>
                            </Card.Header>
                            <Card.Content>
                                <div className='flex flex-col items-center space-y-8'>
                                    <img
                                        alt='gorillaz'
                                        className={`h-56 w-56 rounded-full border-4 border-border shadow-raised ${isPlaying ? 'animate-spin' : ''}`}
                                        height={224}
                                        src='https://www.normanrecords.com/artwork/medium/233/115233-gorillaz-gorillaz.jpg'
                                        width={224}
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

                        {/* Subscription Card */}
                        <Card className='p-8'>
                            <Card.Header>
                                <Card.Title>Upgrade your subscription</Card.Title>
                                <Card.Description>
                                    Your current plan is free. Upgrade to pro to enjoy all the
                                    features.
                                </Card.Description>
                            </Card.Header>
                            <Card.Content>
                                <div className='space-y-6'>
                                    <div>
                                        <Card.Title className='mb-2'>Plan Selection</Card.Title>
                                        <Card.Description className='mb-4'>
                                            Select the plan that best suits your needs
                                        </Card.Description>
                                        <div className='grid grid-cols-2 gap-4'>
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
                                    <div>
                                        <label
                                            className='mb-2 block text-muted-foreground text-xs'
                                            htmlFor='notes'
                                        >
                                            Notes
                                        </label>
                                        <Input id='notes' placeholder='Additional notes...' />
                                        <div className='mt-4 flex items-center gap-2'>
                                            <Checkbox checked id='terms' />
                                            <label className='text-sm' htmlFor='terms'>
                                                I agree to the terms and conditions.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Card.Content>
                            <Card.Footer className='flex gap-4'>
                                <Button variant={'destructive'}>Cancel</Button>
                                <Button variant={'primary'}>Upgrade plan</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App
