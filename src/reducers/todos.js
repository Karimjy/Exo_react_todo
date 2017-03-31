const initialState = [];

function todos(state = initialState, action) {
  switch (action && action.type) {
    case 'FETCH_TODOS_SUCCESS':
        return action.todos;
    case 'ADD_TODO':
        return state.concat([{ label: action.label, complete: false }]);
    case 'TOGGLE_TODO':
        const newState = state.concat();
        newState[action.index].complete = !newState[action.index].complete;
        return newState;
    default:
        return state;
    }
}

export default todos;
