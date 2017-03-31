import todos from './todos';

test('return initialState to be [] by default', () => {
  expect(todos([])).toEqual([]);
});

test('return state after ADD_TODO action', () => {
  expect(todos([], {type: 'ADD_TODO', label: 'Add Todo'})).toEqual([{label: 'Add Todo', complete: false}]);
});

test('return complete true after TOGGLE_TODO action', () => {
  expect(todos([{label: '1', complete: false}], {type: 'TOGGLE_TODO', index: 0})).toEqual([{label: '1', complete: true}]);
});

test('return complete true after TOGGLE_TODO action', () => {
  expect(todos([{label: '1', complete: true}], {type: 'TOGGLE_TODO', index: 0})).toEqual([{label: '1', complete: false}]);
});

test('return state after FETCH_TODOS_SUCCESS action', () => {
  expect(todos(null, {type: 'FETCH_TODOS_SUCCESS', todos: [{label: '1'}]}).length).toEqual(1);
});
