import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap';

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
  <div className="mt-4">
    <Table>
      <tbody>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            onDelete={() => onTodoDelete(todo.id)}
          />
        )}
      </tbody>
    </Table>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
}

export default TodoList
