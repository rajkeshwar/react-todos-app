
import clsx from 'clsx';
import { getDeadline, sortByDeadline } from '../Todo';
import './TodoList.scss';

const TodoList = ({ todos = [], onEdit, onDelete, onComplete }) => {

  return (
    <ul className="todolist">
      {todos.sort(sortByDeadline).map(todo => (
        <li className={clsx(['todolist__item', 'todo', `todo--${getDeadline(todo.date)}`])} key={todo.id}>
          <div className="content">
            <label className="content__row">
              <input type="checkbox"
                onChange={() => onComplete(todo, todo.completed)}
                value={todo.completed}
              />
              <p className={clsx('todo-title', {
                'todo-title--completed': todo.completed
              })}> {todo.title}</p>
            </label>
            <div className="status">
              <span className="status--priority">{todo.priority.toLowerCase()}</span>
              <span className="status--expiry">{todo.date}</span>
            </div>
          </div>
          <span className="icon-group">
            <i className="icon" onClick={() => onEdit(todo)} role="button" aria-label="edit" >✏️</i>
            <i className="icon" onClick={() => onDelete(todo)} role="button" aria-label="delete">❌</i>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;