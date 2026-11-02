import { TodoFilters } from './components/TodoFilters'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { useTodos } from './useTodos'
import styles from './App.module.css'

function App() {
  const {
    visibleTodos,
    emptyMessage,
    totalCount,
    activeCount,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos()

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>Список задач</h1>

      <TodoForm onAdd={addTodo} />
      <TodoFilters current={filter} onChange={setFilter} />
      <TodoList
        todos={visibleTodos}
        emptyMessage={emptyMessage}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      {totalCount > 0 && <p className={styles.counter}>Осталось активных: {activeCount}</p>}
    </main>
  )
}

export default App
