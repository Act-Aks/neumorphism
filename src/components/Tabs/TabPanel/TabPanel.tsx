import { Tabs as BaseTabs, mergeProps } from '@base-ui/react'
import { type TabPanelProps, tabPanelVariants } from './TabPanel.static'

export const TabPanel: React.FC<TabPanelProps> = props => {
    const tabPanelProps = mergeProps(props, { className: tabPanelVariants() })

    return <BaseTabs.Panel value={tabPanelProps.value} {...tabPanelProps} />
}
