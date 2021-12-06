import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
// import { useHistory } from 'react-router'

const Wrapper = styled.div`
  margin: 40px;
`

export const HomeContainer = () => {
  // const history = useHistory()
  // const onClick = useCallback((path: string) => () => history.push(path), [
  //   history,
  // ])
  return (
    <Wrapper>
      <Card title="Hello">
        <h1>Here is Home</h1>
      </Card>
    </Wrapper>
  )
}
