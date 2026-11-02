export interface Todo {
  id: string
  text: string
  completed: boolean
}

export const FILTERS = [
  { value: 'all', label: 'Все', empty: 'Задач пока нет. Добавьте первую!', matches: (_todo: Todo) => true },
  { value: 'active', label: 'Активные', empty: 'Нет активных задач.', matches: (todo: Todo) => !todo.completed },
  { value: 'completed', label: 'Выполненные', empty: 'Нет выполненных задач.', matches: (todo: Todo) => todo.completed },
] as const

export type Filter = (typeof FILTERS)[number]['value']

const STORAGE_KEY = 'todo-list:todos'

function isTodo(value: unknown): value is Todo {
  if (typeof value !== 'object' || value === null) return false
  const item = value as Record<string, unknown>
  return (
    typeof item.id === 'string' &&
    typeof item.text === 'string' &&
    typeof item.completed === 'boolean'
  )
}

export function loadTodos(): Todo[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(parsed) ? parsed.filter(isTodo) : []
  } catch {
    return []
  }
}

export function saveTodos(todos: Todo[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}
