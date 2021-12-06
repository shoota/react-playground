import React from 'react'
import { WatchQueryFetchPolicy } from '@apollo/client'

import { Todos } from 'components/Todos'
import { useTodosQuery } from 'graphql/api'

type Props = {
  fetchPolicy: WatchQueryFetchPolicy
}

export const TodosContainer: React.FC<Props> = ({ fetchPolicy }) => {
  const { data, loading } = useTodosQuery({ fetchPolicy })
  return <Todos todos={data?.todos} isLoading={loading} />
}
