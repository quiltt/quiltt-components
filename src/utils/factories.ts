import * as Factory from 'factory.ts'
import * as faker from 'faker/locale/en_US'

import {
  Account,
  AccountTypes,
  LedgerBalance,
  LedgerState,
  LedgerStatus,
  Transaction,
  TransactionEntryTypes,
  TransactionStatus,
} from '../types'

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][]
  const randomIndex = Math.floor(Math.random() * enumValues.length)
  return enumValues[randomIndex]
}

export const LedgerBalanceMock = Factory.Sync.makeFactory<LedgerBalance>({
  id: Factory.each(() => faker.datatype.uuid()),
  available: Factory.each(() => parseFloat(faker.finance.amount())),
  current: Factory.each(() => parseFloat(faker.finance.amount())),
  limit: Factory.each(() => faker.datatype.number({ min: 10, max: 50 })),
})

export const AccountMock = Factory.Sync.makeFactory<Account>({
  id: Factory.each(() => faker.datatype.uuid()),
  balance: Factory.each(() => LedgerBalanceMock.build()),
  lastFourDigits: Factory.each(() => faker.helpers.replaceSymbolWithNumber('####')),
  name: Factory.each(() => faker.finance.accountName()),
  state: LedgerState.Open,
  status: LedgerStatus.Active,
  transactions: [],
  transactionsConnection: {
    edges: [],
    nodes: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
  },
  type: Factory.each(() => randomEnum(AccountTypes)),
})

export const TransactionMock = Factory.Sync.makeFactoryWithRequired<Transaction, 'account'>({
  id: Factory.each(() => faker.datatype.uuid()),
  amount: Factory.each(() => parseFloat(faker.finance.amount())),
  date: Factory.each(() =>
    faker.date.recent(faker.datatype.number({ min: 1, max: 7 })).toISOString()
  ),
  description: Factory.each(() => faker.lorem.sentence()),
  entryType: Factory.each(() => randomEnum(TransactionEntryTypes)),
  metadata: {},
  source: undefined,
  sources: undefined,
  status: Factory.each(() => randomEnum(TransactionStatus)),
})
