'use client'

import { TodoType } from '@/app/page'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Todo from './Todo'
import { AppContext } from '@/context/AppContext'

const Todolist = () => {
  const { todos, setTodos } = useContext(AppContext)

  if (!todos || !setTodos) return null

  return (
    <div>
      {todos.map(({ id, title, completed }) => (
        <Todo key={id} id={id} completed={completed} title={title} />
      ))}
    </div>
  )
}

export default Todolist
