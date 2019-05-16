import { apiResponseTime, httpErrorMap, errorRngFactor } from './config'

class TodoBackend {
  constructor (db) {
    this.db = db

    const todos = db.getItem('todos')
    this.todos = todos ? JSON.parse(todos) : []

    const todoIndex = db.getItem('todoIndex')
    this.todoIndex = todoIndex ? Number(todoIndex) : 0
  }

  createTodo = (todo) => {
    this.incrementTodoIndex()

    this.todos = [...this.todos, { id: this.todoIndex, ...todo }]
    this.syncTodos()

    return this.successfulResponse({ id: this.todoIndex })
  }

  deleteTodo = (id) => {
    this.todos = this.todos.filter(({ id: todoId }) => id !== todoId)
    this.syncTodos()

    return this.successfulResponse()
  }

  getAllTodos = () => {
    return this.successfulResponse(this.todos)
  }

  syncTodos = () => {
    this.db.setItem('todos', JSON.stringify(this.todos))
  }

  incrementTodoIndex = () => {
    this.todoIndex += 1
    this.db.setItem('todoIndex', this.todoIndex)
  }

  successfulResponse = payload => {
    return {
      payload,
      success: true,
    }
  }
}

const genRandomNumber = range =>
  Math.floor(Math.random() * range)

const genRandomBool = () =>
  Math.random() > errorRngFactor

const getRandomHttpError = () => {
  const statusCodes = Object.keys(httpErrorMap)
  const status = statusCodes[genRandomNumber(statusCodes.length)]
  const message = httpErrorMap[status]

  return {
    message,
    status,
  }
}

const genRequest = (method, ...args) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (genRandomBool()) {
          resolve(method(...args))
        } else {
          const errorResponse = {
            success: false,
            ...getRandomHttpError(),
          }

          reject(errorResponse)
        }
      },
      apiResponseTime,
    )
  })
}

const backend = new TodoBackend(localStorage)

export const apiClient = {
  createTodo: todo => {
    if (!todo.name) {
      throw Error('TODO CREATE: todo needs to have a property called \'name\'')
    }

    return genRequest(backend.createTodo, todo)
  },

  deleteTodo: id => {
    if (!id && id !== 0) {
      throw Error('TODO DELETE: parameter \'id\' is required')
    }

    if (typeof id !== 'number') {
      throw Error('TODO DELETE: parameter \'id\' needs to be of type number')
    }

    return genRequest(backend.deleteTodo, id)
  },

  getAllTodos: () => genRequest(backend.getAllTodos),
}
