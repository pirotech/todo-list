import type { Todo } from '../../todos'
import styles from './TodoItem.module.css'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={styles.text}>{todo.text}</span>
      </label>
      <button
        type="button"
        className={styles.delete}
        onClick={() => onDelete(todo.id)}
        aria-label={`Удалить задачу «${todo.text}»`}
        title="Удалить"
      >
        ×
      </button>
    </li>
  )
}
