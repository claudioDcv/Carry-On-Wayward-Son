import React from 'react'
import { Container, Jumbotron } from 'reactstrap';

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <Container>
    <Jumbotron>
      <h1 className="display-3">TODO List</h1>
    </Jumbotron>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
)

export default App
