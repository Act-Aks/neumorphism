import{j as c}from"./jsx-runtime-u17CrQMm.js";import{f as D,a as b,c as I,m as j}from"./index-INrKvmRh.js";import{r as n}from"./iframe-DtOoGLv3.js";import{u as k}from"./useValueAsRef-U_2MnS-a.js";import{f as N,v as _}from"./valueToPercent-CmxdyyhM.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsoLayoutEffect-BH9BFz4R.js";const R=n.createContext(void 0);function C(){const e=n.useContext(R);if(e===void 0)throw new Error(D(51));return e}let y=(function(e){return e.complete="data-complete",e.indeterminate="data-indeterminate",e.progressing="data-progressing",e})({});const P={status(e){return e==="progressing"?{[y.progressing]:""}:e==="complete"?{[y.complete]:""}:e==="indeterminate"?{[y.indeterminate]:""}:null}};function B(e,r,o){return e==null?"":o?N(e,r,o):N(e/100,r,{style:"percent"})}function $(e,r){return r==null?"indeterminate progress":e||`${r}%`}const F=n.forwardRef(function(r,o){const{format:u,getAriaValueText:d=$,locale:s,max:a=100,min:l=0,value:t,render:w,className:f,...v}=r,[V,S]=n.useState(),M=k(u);let m="indeterminate";Number.isFinite(t)&&(m=t===a?"complete":"progressing");const h=B(t,s,M.current),x=n.useMemo(()=>({status:m}),[m]),E={"aria-labelledby":V,"aria-valuemax":a,"aria-valuemin":l,"aria-valuenow":t??void 0,"aria-valuetext":d(h,t),role:"progressbar"},T=n.useMemo(()=>({formattedValue:h,max:a,min:l,setLabelId:S,state:x,status:m,value:t}),[h,a,l,S,x,m,t]),A=b("div",r,{state:x,ref:o,props:[E,v],stateAttributesMapping:P});return c.jsx(R.Provider,{value:T,children:A})}),O=n.forwardRef(function(r,o){const{render:u,className:d,...s}=r,{state:a}=C();return b("div",r,{state:a,ref:o,props:s,stateAttributesMapping:P})}),L=n.forwardRef(function(r,o){const{render:u,className:d,...s}=r,{max:a,min:l,value:t,state:w}=C(),f=Number.isFinite(t)&&t!==null?_(t,l,a):null,v=n.useCallback(()=>f==null?{}:{insetInlineStart:0,height:"inherit",width:`${f}%`},[f]);return b("div",r,{state:w,ref:o,props:[{style:v()},s],stateAttributesMapping:P})}),q=I("relative overflow-hidden rounded-full bg-background shadow-inset focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",{defaultVariants:{orientation:"horizontal"},variants:{orientation:{horizontal:"h-5 w-full",vertical:"h-full w-5"}}}),G=I("rounded-full border-none",{defaultVariants:{orientation:"horizontal",variant:"default"},variants:{orientation:{horizontal:"bg-linear-to-l",vertical:"bg-linear-to-t"},variant:{default:"from-primary to-primary/75",secondary:"from-muted-foreground to-muted-foreground/75"}}}),z=e=>{const{orientation:r,variant:o}=e,u=j(e,{className:q({orientation:r})}),d=j(e,{className:G({orientation:r,variant:o})}),{value:s,...a}=u;return c.jsx(F,{value:s,...a,children:c.jsx(O,{className:"h-full w-full",children:c.jsx(L,{...d,style:r==="vertical"?{bottom:0,height:`${s}%`,position:"absolute",width:"100%"}:{}})})})};z.__docgenInfo={description:"",methods:[],displayName:"ProgressBar"};const Y={argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["default","secondary"]}},component:z,parameters:{layout:"centered"},tags:["autodocs"],title:"Components/ProgressBar"},i={args:{orientation:"horizontal",value:60,variant:"default"},decorators:[e=>c.jsx("div",{style:{alignItems:"center",display:"flex",height:200,justifyContent:"center",width:300},children:c.jsx(e,{})})]},p={args:{...i.args,value:40,variant:"secondary"},decorators:i.decorators},g={args:{...i.args,orientation:"vertical",value:70},decorators:i.decorators};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    value: 60,
    variant: 'default'
  },
  decorators: [Story => <div style={{
    alignItems: 'center',
    display: 'flex',
    height: 200,
    justifyContent: 'center',
    width: 300
  }}>
                <Story />
            </div>]
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 40,
    variant: 'secondary'
  },
  decorators: Default.decorators
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: 'vertical',
    value: 70
  },
  decorators: Default.decorators
}`,...g.parameters?.docs?.source}}};const Z=["Default","Secondary","Vertical"];export{i as Default,p as Secondary,g as Vertical,Z as __namedExportsOrder,Y as default};
