import { TodoType, initialTodos } from '@/app/page'
import { SetStateAction, createContext } from 'react'

export type TodoContextType = {
  todos: TodoType[] | null
  setTodos: React.Dispatch<SetStateAction<TodoType[]>> | null
}

export const AppContext = createContext<TodoContextType>({
  todos: null,
  setTodos: null,
})
