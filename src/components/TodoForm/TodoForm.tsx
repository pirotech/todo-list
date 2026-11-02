import {type SubmitEvent, useState} from 'react'
import styles from './TodoForm.module.css'

interface TodoFormProps {
  onAdd: (text: string) => void
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [value, setValue] = useState('')
  const canSubmit = value.trim().length > 0

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit) return
    onAdd(value)
    setValue('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Что нужно сделать?"
        aria-label="Новая задача"
        autoFocus
      />
      <button className={styles.button} disabled={!canSubmit}>
        Добавить
      </button>
    </form>
  )
}
