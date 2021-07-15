import * as React from 'react'

import classNames from 'classnames'

import { AsProp, CustomComponentRefForwardingComponent } from 'utils/components'

import FormContext from './FormContext'
import styles from './styles'

export interface FormGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    AsProp {
  controlId?: string
}

type Ref = React.ReactNode | HTMLElement | string

const FormGroup: CustomComponentRefForwardingComponent<'div', FormGroupProps> =
  React.forwardRef<Ref, FormGroupProps>(function FormGroup(props, ref) {
    const { as = 'div', controlId, className, children, ...otherProps } = props

    const baseStyles = styles.formGroup.base

    const cls = classNames(baseStyles, className)
    const context = React.useMemo(() => ({ controlId }), [controlId])

    return (
      <FormContext.Provider value={context}>
        {React.createElement(
          as as string,
          {
            className: cls,
            ref,
            ...otherProps,
          },
          children
        )}
      </FormContext.Provider>
    )
  })

export default FormGroup
