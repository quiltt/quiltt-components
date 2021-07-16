import * as React from 'react'

import classNames from 'classnames'

import { AsProp, CustomComponentRefForwardingComponent } from 'utils/components'

import FormInput from './FormInput'
import FormInputGroupContext from './FormInputGroupContext'
import styles from './styles'

const InputGroupPrepend = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode
}) =>
  React.createElement(
    'div',
    {
      className: classNames('input-group-prepend', styles.inputGroup.prepend),
      ...otherProps,
    },
    children
  )

const InputGroupAppend = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode
}) =>
  React.createElement(
    'div',
    {
      className: classNames('input-group-append', styles.inputGroup.append),
      ...otherProps,
    },
    children
  )

const InputGroupText = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode
}) => React.createElement('span', { ...otherProps }, children)

const InputGroupCheckbox = (props: any) => (
  <InputGroupText>
    <FormInput type="checkbox" {...props} />
  </InputGroupText>
)

const InputGroupRadio = (props: any) => (
  <InputGroupText>
    <FormInput type="radio" {...props} />
  </InputGroupText>
)

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    AsProp {
  size?: 'sm' | 'lg' | 'default'
  hasValidation?: boolean
}

type Ref = React.ReactNode | HTMLElement | string

/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
const InputGroup: CustomComponentRefForwardingComponent<
  'div',
  InputGroupProps
> = React.forwardRef<Ref, InputGroupProps>(function InputGroup(props, ref) {
  const {
    as = 'div',
    size = 'default',
    hasValidation = false,
    className,
    children,
    ...otherProps
  } = props
  // Intentionally an empty object. Used in detecting if a dropdown
  // exists under an input group.
  const contextValue = React.useMemo(() => ({}), [])

  const baseStyles = styles.inputGroup.base

  const sizeClassName = size === 'default' ? '' : `input-group-${size}`

  const cls = classNames(
    'input-group',
    sizeClassName,
    baseStyles,
    hasValidation && 'has-validation',
    className
  )

  return (
    <FormInputGroupContext.Provider value={contextValue}>
      {React.createElement(
        as as string,
        {
          ref,
          className: cls,
          ...otherProps,
        },
        children
      )}
    </FormInputGroupContext.Provider>
  )
})

export default Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox,
  Prepend: InputGroupPrepend,
  Append: InputGroupAppend,
})
