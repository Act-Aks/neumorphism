import { Tabs as BaseTabs, mergeProps } from '@base-ui/react'
import { type TabProps, tabVariants } from './Tab.static'

export const Tab: React.FC<TabProps> = props => {
    const tabProps = mergeProps(props, { className: tabVariants() })

    return <BaseTabs.Tab value={tabProps.value} {...tabProps} />
}
