import { Tabs as BaseTabs, mergeProps } from '@base-ui/react'
import { type TabIndicatorProps, tabIndicatorVariants } from './TabIndicator.static'

export const TabIndicator: React.FC<TabIndicatorProps> = props => {
    const tabIndicatorProps = mergeProps(props, { className: tabIndicatorVariants() })

    return <BaseTabs.Indicator {...tabIndicatorProps} />
}
