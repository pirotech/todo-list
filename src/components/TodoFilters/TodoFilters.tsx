import { FILTERS } from '../../todos'
import type { Filter } from '../../todos'
import styles from './TodoFilters.module.css'

interface TodoFiltersProps {
  current: Filter
  onChange: (filter: Filter) => void
}

export function TodoFilters({ current, onChange }: TodoFiltersProps) {
  return (
    <div className={styles.filters} role="group" aria-label="Фильтр задач">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={styles.filter}
          aria-pressed={value === current}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
