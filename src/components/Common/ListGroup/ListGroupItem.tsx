import * as React from 'react'

import classNames from 'classnames'

import {
  ColorVariants,
  CustomComponentProps,
  CustomComponentRefForwardingComponent,
} from 'utils/components'

import styles from './styles'

export type ListGroupItemProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    variant?: ColorVariants | 'default'
    disabled?: boolean
  }

type Ref = React.ReactNode | HTMLElement | string

const ListGroupItem: CustomComponentRefForwardingComponent<
  'li',
  ListGroupItemProps
> = React.forwardRef<Ref, ListGroupItemProps>(function ListGroupItem(
  props,
  ref
) {
  const {
    as = 'li',
    variant = 'default',
    disabled = false,
    className,
    children,
    ...otherProps
  } = props

  const baseStyle = styles.listGroupItem.base
  const variantStyle = styles.listGroupItem[variant]
  const disabledStyles = disabled ? styles.listGroupItem.disabled : ''

  const cls = classNames(baseStyle, variantStyle, disabledStyles, className)

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

export default ListGroupItem
