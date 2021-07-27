/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Account } from 'components'

export default {
  title: 'Example/Account',
  component: Account,
  argTypes: {},
} as ComponentMeta<typeof Account>

const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Account',
}
