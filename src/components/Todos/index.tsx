import React from 'react'
import { List, Typography, Space } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'

type Todo = {
  id: number
  contents: string
  finished: boolean
}

type Props = {
  isLoading?: boolean
  todos?: Todo[]
}

export const Todos: React.VFC<Props> = ({ todos, isLoading }) => {
  return (
    <List
      size="large"
      loading={isLoading}
      dataSource={todos}
      renderItem={({ id, contents, finished }) => (
        <List.Item key={id}>
          <Typography.Title>
            <Space>
              <CheckCircleTwoTone
                twoToneColor={finished ? '#52c41a' : '#e3e3e3'}
              />
              {contents}
            </Space>
          </Typography.Title>
          {/* <Typography.Title level={5}>{contents}</Typography.Title> */}
        </List.Item>
      )}
    />
  )
}
