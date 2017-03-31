import React from 'react';
import TodoItem from './TodoItem';
import renderer from 'react-test-renderer';

it('TodoItem renders correctly', () => {
  const tree = renderer.create(
    <TodoItem label="Item" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TodoItem renders correctly', () => {
  const tree = renderer.create(
    <TodoItem label="Item" complete={true}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
