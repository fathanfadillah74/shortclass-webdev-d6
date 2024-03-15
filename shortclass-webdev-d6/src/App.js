import './App.css';
import TodoList from './component/todoList';
import todos from './data/todos';

function App() {
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
