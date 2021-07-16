import * as React from 'react'

import classNames from 'classnames'

import styles from './styles'

export type CardImgProps = React.HTMLAttributes<HTMLImageElement> & {
  src: string
  alt?: string
  // variant?: 'top' | 'bottom'
}

const CardImg = React.forwardRef<HTMLImageElement, CardImgProps>(function Card(
  props,
  ref
) {
  const { src, className, alt = '', ...otherProps } = props

  const baseStyle = styles.cardImg.base

  const cls = classNames('card-image', baseStyle, className)

  return <img src={src} className={cls} ref={ref} {...otherProps} alt={alt} />
})

export default CardImg
