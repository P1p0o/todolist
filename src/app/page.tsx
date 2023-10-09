'use client'

import NewTodo from '@/components/NewTodo'
import Todolist from '@/components/Todolist'
import { AppContext } from '@/context/AppContext'
import Image from 'next/image'
import { createContext, useState } from 'react'

export type TodoType = {
  id: number
  title: string
  completed: boolean
}

export const initialTodos: TodoType[] = [
  {
    id: 1,
    title: 'Faire les courses',
    completed: false,
  },
  {
    id: 2,
    title: 'Acheter du pain',
    completed: false,
  },
]

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos)

  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      <div>
        <h1 className='text-center text-7xl my-10'>Todolist</h1>
        <Todolist />
        <NewTodo />
      </div>
    </AppContext.Provider>
  )
}
