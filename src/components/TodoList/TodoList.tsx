import type { Todo } from '../../todos'
import { TodoItem } from '../TodoItem'
import styles from './TodoList.module.css'

interface TodoListProps {
  todos: Todo[]
  emptyMessage: string
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoList({ todos, emptyMessage, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}
