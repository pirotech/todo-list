import { useEffect, useState } from 'react'
import { FILTERS, loadTodos, saveTodos } from './todos'
import type { Filter, Todo } from './todos'

const createId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos)
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const addTodo = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [...prev, { id: createId(), text: trimmed, completed: false }])
  }

  const toggleTodo = (id: string) =>
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    )

  const deleteTodo = (id: string) => setTodos((prev) => prev.filter((todo) => todo.id !== id))

  const current = FILTERS.find((item) => item.value === filter) ?? FILTERS[0]

  return {
    visibleTodos: todos.filter(current.matches),
    emptyMessage: current.empty,
    totalCount: todos.length,
    activeCount: todos.filter((todo) => !todo.completed).length,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  }
}
