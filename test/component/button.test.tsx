import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../../src/components/button'

it('button', () => {
  const b = renderer.create(<Button>Example</Button>).toJSON()
  expect(b).toMatchSnapshot()
})
