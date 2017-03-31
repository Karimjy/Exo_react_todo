import React from 'react';
import Todo from './Todo';
import renderer from 'react-test-renderer';

it('Todo renders correctly', () => {
  const tree = renderer.create(
    <Todo onAddTodo={()=>{}} todos={[]} filter='none' onTodoClick={()=>{}} filterTodo={()=>{}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
