import{c as n,m as p}from"./index-DLnsaVFI.js";import{u as c}from"./useRender-C_kDoQ-H.js";import"./iframe-DpdK6mbW.js";import"./preload-helper-PPVm8Dsz.js";const d=n("flex w-full rounded-md border border-highlight bg-background px-3 py-2 text-sm shadow-inset ring-offset-background file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:opacity-50"),l=s=>{const{type:o}=s,a=p(s,{className:d(),type:o});return c({defaultTagName:"input",props:a,render:s.render})},b={argTypes:{type:{control:"select",options:["text","password","email","number"]}},component:l,parameters:{layout:"centered"},tags:["autodocs"],title:"Components/Input"},e={args:{placeholder:"Enter text...",type:"text"}},r={args:{placeholder:"Enter password...",type:"password"}},t={args:{placeholder:"Enter email...",type:"email"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    type: 'text'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password...',
    type: 'password'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter email...',
    type: 'email'
  }
}`,...t.parameters?.docs?.source}}};const y=["Default","Password","Email"];export{e as Default,t as Email,r as Password,y as __namedExportsOrder,b as default};
