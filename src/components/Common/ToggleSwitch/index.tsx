import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export type ToggleSwitchProps = React.HTMLAttributes<HTMLInputElement> & {
  /**
   * Defines if the input is disabled
   */
  disabled?: boolean
  /**
   * Defines the size of the input
   */
  size?: 'sm' | 'base' | 'lg'
  onChange?: (e?: any) => void | React.Dispatch<any>
  checked?: boolean
  label?: string
}

const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleSwitchProps>(
  function ToggleSwitch(props, ref) {
    const {
      checked = false,
      size = 'base',
      disabled = false,
      label,
      onChange,
      ...otherProps
    } = props

    const sizeStyles = styles.size[size]
    const checkedStyles = checked ? styles.checked : styles.unchecked
    const switchSizeStyles = styles.switch.size[size]
    const switchTranslateStyles = styles.switch.translate[size]
    const switchCheckedStyles = checked
      ? switchTranslateStyles
      : 'translate-x-0'

    const baseStyles = classNames(styles.base, sizeStyles, checkedStyles)
    const switchStyles = classNames(
      styles.switch.base,
      switchSizeStyles,
      switchCheckedStyles
    )

    return (
      <div className="relative toggle-switch">
        <input
          type="checkbox"
          className="sr-only"
          onChange={onChange}
          checked={checked}
          tabIndex={disabled ? -1 : 1}
          ref={ref}
          {...otherProps}
        />
        <div className="flex items-center justify-center">
          <span className="sr-only">{label}</span>
          <div className={baseStyles}>
            <span className={switchStyles}>
              <span className="sr-only">{checked ? 'Yes' : 'No'}</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
)

export default ToggleSwitch
