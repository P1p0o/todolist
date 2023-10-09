import { TodoType } from '@/app/page'
import { AppContext } from '@/context/AppContext'
import React, {
  Dispatch,
  LegacyRef,
  MutableRefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

const NewTodo = () => {
  const [newTodo, setNewTodo] = useState('')
  const { setTodos } = useContext(AppContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Valeur de l'input
    const value = e.target.value
    setNewTodo(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!setTodos) return

    setTodos((previousTodos: TodoType[]) => {
      const id = previousTodos.length
        ? previousTodos[previousTodos.length - 1].id + 1
        : 1
      const todoToAdd = {
        id,
        title: newTodo,
        completed: false,
      }
      return [...previousTodos, todoToAdd]
    })
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='text-black'
        type='text'
        value={newTodo}
        onChange={handleChange}
      />
      <button type='submit'>Ajouter</button>
    </form>
  )
}

export default NewTodo
