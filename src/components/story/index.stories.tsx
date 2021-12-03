import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Todos } from '../Todos'

const todos = [
  {
    id: 1,
    contents: 'should do',
    finished: false,
  },
  {
    id: 1,
    contents: 'done is better',
    finished: true,
  },
]

storiesOf('story/usage', module).add('default', () => {
  return <Todos todos={todos} />
})
