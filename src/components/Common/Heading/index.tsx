import * as React from 'react'

import classNames from 'classnames'

import {
  ColorVariants,
  CustomComponentProps,
  CustomComponentRefForwardingComponent,
} from 'utils/components'
import warn from 'utils/warning'

import styles from './styles'

type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>

interface Props
  extends React.HTMLAttributes<HTMLElement>,
    CustomComponentProps {
  children?: React.ReactNode
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' // The size of the heading
  icon?: IconType // Shows only one icon inside the heading; defaults to left
  iconLeft?: IconType // Shows a left aligned icon
  iconRight?: IconType // Shows a left aligned icon
  variant?: ColorVariants | 'base' // The color variant of the heading
  block?: boolean // Shows full width block heading
}

export type HeadingProps = Props

type Ref = React.ReactNode | HTMLElement | string

const Heading: CustomComponentRefForwardingComponent<'h1', HeadingProps> =
  React.forwardRef<Ref, HeadingProps>(function Heading(props, ref) {
    const {
      as = 'h1',
      size = 'md',
      variant = 'base',
      block = false,
      icon,
      iconLeft,
      iconRight,
      className,
      children,
      ...otherProps
    } = props

    function hasIcon() {
      return !!icon || !!iconLeft || !!iconRight
    }

    warn(
      hasIcon() && !otherProps['aria-label'] && !children,
      'Heading',
      'You are using an icon heading, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
    )

    const IconLeft = iconLeft || icon
    const IconRight = iconRight

    const baseStyle = styles.base
    const blockStyle = styles.block
    const sizeStyles = {
      '2xl': styles.size['2xl'],
      xl: styles.size.xl,
      lg: styles.size.lg,
      md: styles.size.md,
      sm: styles.size.sm,
      xs: styles.size.xs,
    }
    const iconSizeStyles = styles.icon[size]
    const iconStyle = styles.icon[size]
    const colorStyle = styles.variants[variant]

    const HeadingStyles = classNames(
      baseStyle,
      hasIcon() && !children && iconSizeStyles[size], // has icon but no children
      hasIcon() && children && sizeStyles[size], // has icon and children
      !hasIcon() && sizeStyles[size], // does not have icon
      block ? blockStyle : null,
      colorStyle,
      className
    )

    const iconLeftStyles = classNames(
      iconStyle,
      children ? styles.icon.left[size] : ''
    )
    const iconRightStyles = classNames(
      iconStyle,
      children ? styles.icon.right[size] : ''
    )

    return React.createElement(
      as as string,
      {
        className: HeadingStyles,
        ref,
        ...otherProps,
      },
      IconLeft
        ? React.createElement(IconLeft, {
            className: iconLeftStyles,
            'aria-hidden': true,
          })
        : null,
      children,
      IconRight
        ? React.createElement(IconRight, {
            className: iconRightStyles,
            'aria-hidden': true,
          })
        : null
    )
  })

export default Heading
