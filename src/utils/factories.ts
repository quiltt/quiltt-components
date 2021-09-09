import * as Factory from 'factory.ts'
import * as faker from 'faker/locale/en_US'

import {
  Account,
  AccountTypes,
  LedgerBalance,
  LedgerState,
  Transaction,
  TransactionEntryTypes,
  TransactionStatus,
} from '../types'

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][]
  const randomIndex = Math.floor(Math.random() * enumValues.length)
  return enumValues[randomIndex]
}

function titleCase(string: string) {
  const sentence = string.toLowerCase().split(' ')
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
  }
  document.write(sentence.join(' '))
  return sentence
}

export const LedgerBalanceMock = Factory.Sync.makeFactory<LedgerBalance>({
  id: Factory.each(() => faker.datatype.uuid()),
  available: Factory.each(() => parseFloat(faker.finance.amount())),
  current: Factory.each(() => parseFloat(faker.finance.amount())),
  limit: Factory.each(() => faker.datatype.number({ min: 10, max: 50 })),
})

export const AccountMock = Factory.Sync.makeFactory<Partial<Account>>({
  id: Factory.each(() => faker.datatype.uuid()),
  balance: Factory.each(() => LedgerBalanceMock.build()) as unknown as LedgerBalance,
  lastFourDigits: Factory.each(() => faker.helpers.replaceSymbolWithNumber('####')),
  state: LedgerState.Open,
  type: Factory.each(() => randomEnum(AccountTypes)),
  transactions: [],
}).withDerivation(
  'name',
  (account) => `${faker.company.companyName()} - ${titleCase(account.type as string)} Account`
)

export const AccountWithTransactionsMock = Factory.Sync.makeFactory<Partial<Account>>({
  id: Factory.each(() => faker.datatype.uuid()),
  balance: Factory.each(() => LedgerBalanceMock.build()) as unknown as LedgerBalance,
  lastFourDigits: Factory.each(() => faker.helpers.replaceSymbolWithNumber('####')),
  state: LedgerState.Open,
  type: Factory.each(() => randomEnum(AccountTypes)),
  transactions: [],
})
  .withDerivation(
    'name',
    (account) => `${faker.company.companyName()} - ${titleCase(account.type as string)} Account`
  )
  .withDerivation('transactions', (account) => {
    const transactions: Partial<Transaction>[] = []
    for (let i = 0; i < 5; i++) {
      transactions.push({
        id: faker.datatype.uuid(),
        account: account as Account,
        amount: parseFloat(faker.finance.amount()),
        date: faker.date.recent(faker.datatype.number({ min: 1, max: 7 })).toISOString(),
        description: faker.commerce.productName(),
        entryType: randomEnum(TransactionEntryTypes),
        status: randomEnum(TransactionStatus),
      })
    }
    return transactions as Transaction[]
  })

export const TransactionMock = Factory.Sync.makeFactoryWithRequired<
  Partial<Transaction>,
  'account'
>({
  id: Factory.each(() => faker.datatype.uuid()),
  amount: Factory.each(() => parseFloat(faker.finance.amount())),
  date: Factory.each(() =>
    faker.date.recent(faker.datatype.number({ min: 1, max: 7 })).toISOString()
  ),
  description: Factory.each(() => faker.commerce.productName()),
  entryType: Factory.each(() => randomEnum(TransactionEntryTypes)),
  status: Factory.each(() => randomEnum(TransactionStatus)),
})
