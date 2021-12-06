import React, { useCallback } from 'react'
import { WatchQueryFetchPolicy } from '@apollo/client'

import { Todos } from 'components/Todos'
import { useTodosLazyQuery } from 'graphql/api'

type Props = {
  fetchPolicy: WatchQueryFetchPolicy
}

export const TodosContainer: React.FC<Props> = ({ fetchPolicy }) => {
  const [getTodo, { data, loading }] = useTodosLazyQuery({ fetchPolicy })
  const getContent = useCallback(() => getTodo(), [getTodo])
  return (
    <Todos todos={data?.todos} isLoading={loading} getContent={getContent} />
  )
}
