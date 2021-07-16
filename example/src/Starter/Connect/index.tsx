import * as React from 'react'
import { Link } from 'react-router-dom'

import { gql, useQuery } from '@apollo/client'
import { AccountList, Card, PlaidLinkButton } from 'quiltt-components'

const GET_ACCOUNTS = gql`
  query {
    plaidItems {
      id
      name
      logo {
        url
      }
      accounts {
        id
        type
        name
        balance {
          available
          current
        }
      }
    }
  }
`

const Connect: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ACCOUNTS)

  if (loading) return <p>Loading...</p>
  if (error) throw error

  console.log(data)

  return (
    <div className="p-4">
      {' '}
      <Link className="mb-8 text-purple-600 hover:underline" to="/">
        Go Back
      </Link>
      <div className="p-4 mx-auto max-w-7xl">
        {/* <PlaidLinkButton /> */}
        {data.plaidItems.map((item: any) => {
          const { accounts } = item
          return (
            <ul className="my-3 rounded-lg shadow" key={item.id}>
              <li className="flex flex-col">
                <Card>
                  <div className="p-4 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                    <div className="flex items-center justify-center space-x-2">
                      {item?.logo?.url ? <img src={item.logo.url} alt="" width={50} height={50} /> : null}
                      <h2 className="text-xl font-medium md:text-4xl">{item.name}</h2>
                    </div>
                  </div>
                  {accounts.length ? <AccountList accounts={accounts} /> : null}
                </Card>
              </li>
            </ul>
          )
        })}
        <div className="my-4">
          <PlaidLinkButton block />
        </div>
      </div>
    </div>
  )
}

export default Connect
