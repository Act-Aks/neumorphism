import { Tabs as BaseTabs, mergeProps } from '@base-ui/react'
import { Tab } from './Tab/Tab'
import { TabIndicator } from './TabIndicator/TabIndicator'
import { TabList } from './TabList/TabList'
import { TabPanel } from './TabPanel/TabPanel'
import { type TabsProps, tabsVariants } from './Tabs.static'

export function Tabs(props: TabsProps) {
    const rootProps = mergeProps(props, { className: tabsVariants() })

    return <BaseTabs.Root {...rootProps} />
}

Tabs.Tab = Tab
Tabs.TabIndicator = TabIndicator
Tabs.TabList = TabList
Tabs.TabPanel = TabPanel
