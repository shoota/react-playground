import { ComponentStory, ComponentMeta } from '@storybook/react'
import * as React from 'react'

import { Todos } from '../Todos'

const todos = [
  {
    id: 1,
    contents: 'should do',
    finished: false,
  },
  {
    id: 2,
    contents: 'done is better',
    finished: true,
  },
]

const meta: ComponentMeta<typeof Todos> = {
  title: 'Example/Todos',
  component: Todos,
  args: {
    todos,
  },
}

export default meta

const Template: ComponentStory<typeof Todos> = (args) => <Todos {...args} />

export const Main = Template.bind({})
