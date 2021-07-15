import * as React from 'react'

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>

export type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  P
> &
  P

export interface CustomComponentOnlyProps {
  customComponent?: string
}

export interface AsProp<As extends React.ElementType = React.ElementType> {
  as?: As
}

export interface CustomComponentProps<
  As extends React.ElementType = React.ElementType
> extends CustomComponentOnlyProps,
    AsProp<As> {}

export interface CustomComponentRefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<
      ReplaceProps<As, CustomComponentProps<As> & P>
    >,
    context?: any
  ): React.ReactElement | null
  contextTypes?: any
  displayName?: string
}

export type CustomComponentComponentClass<
  As extends React.ElementType,
  P = unknown
> = React.ComponentClass<ReplaceProps<As, CustomComponentProps<As> & P>>

export type ColorVariants =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'dark'
  | 'danger'
  | 'success'
  | 'warning'
