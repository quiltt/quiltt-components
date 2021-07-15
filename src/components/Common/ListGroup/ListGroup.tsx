import * as React from 'react'

import classNames from 'classnames'

import {
  CustomComponentProps,
  CustomComponentRefForwardingComponent,
} from 'utils/components'

import ListGroupItem from './ListGroupItem'
import styles from './styles'

export type ListGroupProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    variant?: 'flush' | 'default'
  }

type Ref = React.ReactNode | HTMLElement | string

const ListGroup: CustomComponentRefForwardingComponent<'ul', ListGroupProps> =
  React.forwardRef<Ref, ListGroupProps>(function ListGroup(props, ref) {
    const {
      as = 'ul',
      variant = 'default',
      className,
      children,
      ...otherProps
    } = props

    const baseStyle = styles.listGroup.base
    const variantStyle = styles.listGroup[variant]

    const cls = classNames(baseStyle, variantStyle, className)

    return React.createElement(
      as as string,
      {
        className: cls,
        ref,
        ...otherProps,
      },
      children
    )
  })

ListGroup.displayName = 'ListGroup'

export default Object.assign(ListGroup, {
  Item: ListGroupItem,
})
