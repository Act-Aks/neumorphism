import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as a,m as o}from"./index-INrKvmRh.js";import{u as i}from"./useRender-qO4dNjOJ.js";import"./iframe-DtOoGLv3.js";import"./preload-helper-PPVm8Dsz.js";const c=a("rounded-2xl border-3 border-border",{defaultVariants:{variant:"raised"},variants:{variant:{inset:"shadow-inset",raised:"shadow-raised"}}}),m=a("p-6 pt-0"),u=e=>{const s=o(e,{className:m()});return i({defaultTagName:"div",props:s,render:e.render})},p=a("text-muted-foreground text-sm"),f=e=>{const s=o(e,{className:p()});return i({defaultTagName:"div",props:s,render:e.render})},g=a("p-6 pt-0"),b=e=>{const s=o(e,{className:g()});return i({defaultTagName:"div",props:s,render:e.render})},x=a("flex flex-col space-y-1.5 p-6"),h=e=>{const s=o(e,{className:x()});return i({defaultTagName:"div",props:s,render:e.render})},v=a("font-semibold leading-none tracking-tight"),C=e=>{const s=o(e,{className:v()});return i({defaultTagName:"div",props:s,render:e.render})};function n(e){const{variant:s}=e,t=o(e,{className:c({variant:s})});return i({defaultTagName:"div",props:t,render:e.render})}n.Content=u;n.Description=f;n.Footer=b;n.Header=h;n.Title=C;const D={argTypes:{variant:{control:"select",options:["raised","inset"]}},component:n,parameters:{layout:"centered"},tags:["autodocs"],title:"Components/Card"},d={args:{variant:"raised"},render:e=>r.jsxs(n,{...e,className:"w-[350px]",children:[r.jsxs(n.Header,{children:[r.jsx(n.Title,{children:"Card Title"}),r.jsx(n.Description,{children:"Card Description"})]}),r.jsx(n.Content,{children:r.jsx("p",{children:"This is the content of the card."})}),r.jsx(n.Footer,{children:r.jsx("p",{children:"Card Footer"})})]})},l={render:e=>r.jsxs(n,{...e,className:"w-[350px]",children:[r.jsxs(n.Header,{children:[r.jsx(n.Title,{children:"Login"}),r.jsx(n.Description,{children:"Enter your credentials to login."})]}),r.jsxs(n.Content,{className:"space-y-2",children:[r.jsxs("div",{className:"space-y-1",children:[r.jsx("label",{className:"font-medium text-sm",htmlFor:"email",children:"Email"}),r.jsx("input",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",id:"email",placeholder:"m@example.com"})]}),r.jsxs("div",{className:"space-y-1",children:[r.jsx("label",{className:"font-medium text-sm",htmlFor:"password",children:"Password"}),r.jsx("input",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",id:"password",type:"password"})]})]}),r.jsx(n.Footer,{children:r.jsx("button",{className:"inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",type:"button",children:"Sign In"})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'raised'
  },
  render: args => <Card {...args} className='w-[350px]'>
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} className='w-[350px]'>
            <Card.Header>
                <Card.Title>Login</Card.Title>
                <Card.Description>Enter your credentials to login.</Card.Description>
            </Card.Header>
            <Card.Content className='space-y-2'>
                <div className='space-y-1'>
                    <label className='font-medium text-sm' htmlFor='email'>
                        Email
                    </label>
                    <input className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' id='email' placeholder='m@example.com' />
                </div>
                <div className='space-y-1'>
                    <label className='font-medium text-sm' htmlFor='password'>
                        Password
                    </label>
                    <input className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' id='password' type='password' />
                </div>
            </Card.Content>
            <Card.Footer>
                <button className='inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' type='button'>
                    Sign In
                </button>
            </Card.Footer>
        </Card>
}`,...l.parameters?.docs?.source}}};const k=["Default","WithInputs"];export{d as Default,l as WithInputs,k as __namedExportsOrder,D as default};
