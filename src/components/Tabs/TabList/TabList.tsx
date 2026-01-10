import { Tabs as BaseTabs, mergeProps } from '@base-ui/react'
import { type TabListProps, tabListVariants } from './TabList.static'

export const TabList: React.FC<TabListProps> = props => {
    const tabListProps = mergeProps(props, { className: tabListVariants() })

    return <BaseTabs.List {...tabListProps} />
}
