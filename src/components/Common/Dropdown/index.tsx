import * as React from 'react'

import FocusLock from 'react-focus-lock'

import { Transition } from '@headlessui/react'

import classNames from 'classnames'

import DropdownItem from './DropdownItem'
import styles from './styles'

export interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: () => void | React.Dispatch<any>
  /**
   * Defines if the dropdown is open
   */
  isOpen: boolean
  /**
   * Defines the alignement of the dropdown related to its parent
   */
  align?: 'left' | 'right'
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  function Dropdown(props, ref) {
    const {
      children,
      onClose,
      isOpen,
      className,
      align = 'left',
      ...otherProps
    } = props

    const baseStyle = styles.dropdown.base
    const alignStyle = styles.dropdown.align[align]

    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onClose()
      }
    }

    const dropdownRef = React.useRef<HTMLUListElement>(null)
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }

    React.useEffect(() => {
      document.addEventListener('click', handleClickOutside, { capture: true })
      document.addEventListener('keydown', handleEsc, { capture: true })
      return () => {
        document.removeEventListener('click', handleClickOutside)
        document.removeEventListener('keydown', handleEsc)
      }
    }, [isOpen])

    const cls = classNames(baseStyle, alignStyle, className)

    return (
      <Transition
        show={isOpen}
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div ref={ref}>
          <FocusLock returnFocus>
            <ul
              className={cls}
              ref={dropdownRef}
              aria-label="submenu"
              {...otherProps}
            >
              {children}
            </ul>
          </FocusLock>
        </div>
      </Transition>
    )
  }
)

Dropdown.displayName = 'Dropdown'

export default Object.assign(Dropdown, {
  Item: DropdownItem,
})
