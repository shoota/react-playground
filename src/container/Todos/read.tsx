import React from 'react'
import { WatchQueryFetchPolicy } from '@apollo/client'

import { Todos } from 'components/Todos'
import { useTodosQuery, TodosDocument } from 'graphql/api'
import { client } from 'apolloClient'

export const TodosReadContainer: React.FC<{
  fetchPolicy: WatchQueryFetchPolicy
}> = ({ fetchPolicy }) => {
  useTodosQuery({ fetchPolicy })
  const data = client.readQuery({ query: TodosDocument })

  return <Todos todos={data?.todos} />
}
