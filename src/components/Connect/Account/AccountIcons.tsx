import * as React from 'react'

export type AccountIconTypes =
  | 'CHECKING'
  | 'CREDIT'
  | 'SAVINGS'
  | 'LOAN'
  | 'INVESTMENT'
  | 'MORTGAGE'

const BaseIcon = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block w-5 h-5"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
)

const CheckingIcon = () => (
  <BaseIcon>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx={12} cy={12} r={3} />
    <rect x={3} y={6} width={18} height={12} rx={2} />
    <line x1={18} y1={12} x2="18.01" y2={12} />
    <line x1={6} y1={12} x2="6.01" y2={12} />
  </BaseIcon>
)

const CreditIcon = () => (
  <BaseIcon>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x={3} y={5} width={18} height={14} rx={3} />
    <line x1={3} y1={10} x2={21} y2={10} />
    <line x1={7} y1={15} x2="7.01" y2={15} />
    <line x1={11} y1={15} x2={13} y2={15} />
  </BaseIcon>
)

const SavingsIcon = () => (
  <BaseIcon>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1={3} y1={21} x2={21} y2={21} />
    <line x1={3} y1={10} x2={21} y2={10} />
    <polyline points="5 6 12 3 19 6" />
    <line x1={4} y1={10} x2={4} y2={21} />
    <line x1={20} y1={10} x2={20} y2={21} />
    <line x1={8} y1={14} x2={8} y2={17} />
    <line x1={12} y1={14} x2={12} y2={17} />
    <line x1={16} y1={14} x2={16} y2={17} />
  </BaseIcon>
)

const LoanIcon = () => (
  <BaseIcon>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
  </BaseIcon>
)

const InvestmentIcon = () => (
  <BaseIcon>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1={4} y1={19} x2={20} y2={19} />
    <polyline points="4 15 8 9 12 11 16 6 20 10" />
  </BaseIcon>
)

const MortgageIcon = () => (
  <BaseIcon>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="5 12 3 12 12 3 21 12 19 12" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
  </BaseIcon>
)

const AccountIcons = ({ type }: { type: AccountIconTypes }): JSX.Element => {
  const renderIcon = () => {
    switch (type) {
      case 'CHECKING':
        return <CheckingIcon />
      case 'CREDIT':
        return <CreditIcon />
      case 'SAVINGS':
        return <SavingsIcon />
      case 'LOAN':
        return <LoanIcon />
      case 'INVESTMENT':
        return <InvestmentIcon />
      case 'MORTGAGE':
        return <MortgageIcon />
      default:
        return <CheckingIcon />
    }
  }
  return <>{renderIcon}</>
}

export default AccountIcons
