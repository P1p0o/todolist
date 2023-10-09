import { TodoType } from '@/app/page'
import { AppContext } from '@/context/AppContext'
import React, { Dispatch, SetStateAction, useContext } from 'react'

const Todo = ({
  id,
  completed,
  title,
}: {
  id: number
  completed: boolean
  title: string
}) => {
  const { todos, setTodos } = useContext(AppContext)

  if (!todos || !setTodos) return null

  return (
    <div className='flex'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => {
          const newTodos = todos.map((todo) => {
            // Si on est sur la todo sur laquelle on click
            if (todo.id === id) {
              // On modifie completed pour mettre la valeur inverser
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            // Sinon on ne modifie pas la todo
            else return todo
          })

          setTodos(newTodos)
        }}
      />
      <span>{title}</span>
    </div>
  )
}

export default Todo
