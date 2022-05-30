
import './AddTodo.scss';

const AddTodo = ({ onAdd, todo, setTodo}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(todo)
  }

  const handleChange = (name) => {
    return (e) => setTodo({ ...todo, [name]: e.target.value })
  }

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <h3 className="add-todo__title">Add new todo</h3>
        <div className="form-field">
          <label htmlFor="todo" className="form-field__label">Title</label>
          <input type="text" className="form-field__control" name="title" onChange={handleChange('title')} value={todo.title} />
        </div>

        <div className="form-field">
          <label htmlFor="priority" className="form-field__label">Priority</label>
          <select className="form-field__control" onChange={handleChange('priority')} value={todo.priority}>
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
        </div>

        <div className="form-field">
          <label htmlFor="date" className="form-field__label">Expiry date</label>
          <input type="date" className="form-field__control" onChange={handleChange('date')} value={todo.date} />
        </div>
        <div className="form-field">
          <input type="submit" className="add-todo__submit" value="Add todo" />
        </div>
      </form>
    </div>
  );
}

export default AddTodo;