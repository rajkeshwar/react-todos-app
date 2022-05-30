
import { useState } from 'react';
import AddTodo from './add-todo/AddTodo';
import './App.scss';
import ListName from './list-name/ListName';
import Modal from './modal/Modal';
import { emptyTodo, Todo, todos } from './Todo';
import TodoList from './todo-list/TodoList';

function App() {
  const [visible, setIsVisible] = useState(false);
  const [todo, setTodo] = useState(emptyTodo);
  const [items, setItems] = useState(todos);

  const handleAdd = (todo) => {
    setIsVisible(false);
    if (todo.id) {
      setItems([...items.filter(item => item.id !== todo.id), todo]);
    } else {
      const newTodo = new Todo(todo.title, todo.priority, todo.date);
      setItems([...items, newTodo]);
    }
    setTodo(() => emptyTodo);
  }

  const handleDelete = (todo) => {
    setItems(items.filter(item => item.id !== todo.id));
  }

  const handleEdit = (todo) => {
    setIsVisible(true);
    setTodo(todo);
  }

  const handleAddNew = () => {
    setTodo({ ...emptyTodo });
    setIsVisible(true);
  }

  const handleComplete = (todo, completed) => {
    const newItems = items.map(item => {
      if (item.id === todo.id) {
        item.completed = !completed;
      }
      return { ...item };
    });

    setItems(newItems);
  }

  return (
    <div className="App">
      <ListName />
      <div className="todo">

        <Modal isOpen={visible} onClose={setIsVisible}>
          <AddTodo onAdd={handleAdd} todo={todo} setTodo={setTodo} />
        </Modal>

        <TodoList todos={items}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />

        <div className="add-button">
          <button role="button" onClick={handleAddNew}>Add todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
