import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Row, Col, Input } from 'reactstrap';

import { addTodo } from '../actions'


class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }

    this.handlerOnChange = this.handlerOnChange.bind(this)
    this.handlerOnSubmit = this.handlerOnSubmit.bind(this)
  }

  handlerOnChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handlerOnSubmit(event) {
    if(!this.state.text) return
    event.preventDefault()
    if (!this.state.text.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.state.text))
    this.setState({
      text: '',
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handlerOnSubmit}>
          <Row>
            <Col>
              <Input
                name="text"
                value={this.state.text}
                onChange={this.handlerOnChange}
                placeholder="Insert text here"
              />
            </Col>
            <Col>
              <Button disabled={!this.state.text} type="submit">
                Add Todo
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
