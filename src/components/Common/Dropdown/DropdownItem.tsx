import * as React from 'react'

import Button from '../Button'
import type { ButtonProps } from '../Button'

import styles from './styles'

type Ref = typeof Button
const DropdownItem = React.forwardRef<Ref, ButtonProps>(function DropdownItem(
  props,
  ref
) {
  // Note: className is passed to the inner Button
  const { children, ...otherProps } = props

  const baseStyle = styles.dropdownItem.base

  return (
    <li className={baseStyle}>
      <Button layout="__dropdownItem" ref={ref} {...otherProps}>
        {children}
      </Button>
    </li>
  )
})

export default DropdownItem
