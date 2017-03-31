import { connect } from 'react-redux'
import Todo from '../components/Todo';

import React, { Component } from 'react';

// High Order Component
function fetchTodos(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      fetch('api/todos.json')
      .then((response) =>  {
          return response.json();
      }).then((results) => {
          this.props.fetchComplete(results);
      }).catch((err) =>  {
          this.props.fetchError(err);
      });
    }
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComplete(todos){
      dispatch({ type: 'FETCH_TODOS_SUCCESS', todos});
    },
    fetchError(todos){
      dispatch({ type: 'FETCH_TODOS_ERROR', todos});
    },
    onTodoClick: (index) => {
      dispatch({ type: 'TOGGLE_TODO', index});
    },
    onAddTodo: (label) => {
      dispatch({ type: 'ADD_TODO', label});
    },
    filterTodo(value){
      dispatch({type: 'SET_VISIBILITY_FILTER', value})
    }
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filter,
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchTodos(Todo));

export default TodosContainer
