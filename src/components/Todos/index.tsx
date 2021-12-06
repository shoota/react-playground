import React from 'react'
import { List, Typography, Space, Card, Button } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'

type Todo = {
  id: number
  contents: string
  finished: boolean
}

type Props = {
  isLoading?: boolean
  todos?: Todo[]
  getContent?: () => void
}

export const Todos: React.VFC<Props> = ({ todos, isLoading, getContent }) => {
  return (
    <Card title="TODO List">
      <Button onClick={getContent}>データを取る</Button>
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
          </List.Item>
        )}
      />
    </Card>
  )
}
