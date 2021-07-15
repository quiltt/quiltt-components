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

export type ButtonProps = React.HTMLAttributes<HTMLElement> &
  CustomComponentProps & {
    children?: React.ReactNode
    disabled?: boolean // Defines if the button is disabled
    size?: 'xl' | 'lg' | 'base' | 'sm' | 'pagination' // The size of the button
    icon?: IconType // Shows only one icon inside the button; defaults to left
    iconLeft?: IconType // Shows a left aligned icon
    iconRight?: IconType // Shows a left aligned icon
    layout?: 'outline' | 'link' | 'solid' | '__dropdownItem' // The style of the button
    variant?: ColorVariants // The color variant of the button
    block?: boolean // Shows full width block button
    type?: 'button' | 'submit' | 'reset' // The native HTML button type
  }

type Ref = React.ReactNode | HTMLElement | string

const Button: CustomComponentRefForwardingComponent<'button', ButtonProps> =
  React.forwardRef<Ref, ButtonProps>(function Button(props, ref) {
    const {
      as = 'button',
      type = as === 'button' ? 'button' : undefined, // anchor tags should not contain type attribute
      disabled = false,
      size = 'base',
      layout = 'solid',
      variant = 'primary',
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
      'Button',
      'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
    )

    const IconLeft = iconLeft || icon
    const IconRight = iconRight

    const baseStyle = styles.base
    const blockStyle = styles.block
    const sizeStyles = {
      xl: styles.size.xl,
      lg: styles.size.lg,
      base: styles.size.base,
      sm: styles.size.sm,
      /**
       * Only used in Pagination.
       * Not meant for general use.
       */
      pagination: styles.size.pagination,
    }
    const iconSizeStyles = {
      xl: styles.size.icon.xl,
      lg: styles.size.icon.lg,
      base: styles.size.icon.base,
      sm: styles.size.icon.sm,
      pagination: styles.size.icon.base,
    }
    const iconStyle = styles.icon[size]
    const layoutStyles = {
      solid: styles.variants.solid[variant].base,
      outline: styles.variants.outline[variant].base,
      link: styles.variants.link[variant].base,
    }
    const activeStyles = {
      solid: styles.variants.solid[variant].active,
      outline: styles.variants.outline[variant].active,
      link: styles.variants.link[variant].active,
    }
    const disabledStyles = {
      solid: styles.variants.solid[variant].disabled,
      outline: styles.variants.outline[variant].disabled,
      link: styles.variants.link[variant].disabled,
    }

    /**
     * Only used in DropdownItem.
     * Not meant for general use.
     */
    const dropdownItemStyle = styles.dropdownItem.base

    const buttonStyles =
      layout === '__dropdownItem'
        ? classNames(dropdownItemStyle, className)
        : classNames(
            baseStyle,
            hasIcon() && !children && iconSizeStyles[size], // has icon but no children
            hasIcon() && children && sizeStyles[size], // has icon and children
            !hasIcon() && sizeStyles[size], // does not have icon
            layoutStyles[layout],
            disabled ? disabledStyles[layout] : activeStyles[layout],
            block ? blockStyle : null,
            className
          )

    const iconLeftStyles = classNames(
      iconStyle,
      children ? styles.icon.left : ''
    )
    const iconRightStyles = classNames(
      iconStyle,
      children ? styles.icon.right : ''
    )

    return React.createElement(
      as as string,
      {
        className: buttonStyles,
        ref,
        disabled,
        type,
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

export default Button
