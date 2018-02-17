import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const style = completed => ({ textDecoration: completed ? 'line-through' : 'none' })
const textSuccess = completed => !completed ? 'Completed' : 'Activate'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <tr style={style(completed)}>
    <td>{text}</td>
    <td>
      <Button onClick={onDelete} size="sm" color="danger" className="mr-2">Delete</Button>
      <Button onClick={onClick} size="sm" color="success">{textSuccess(completed)}</Button>
    </td>
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
