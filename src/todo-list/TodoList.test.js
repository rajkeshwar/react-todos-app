import { fireEvent, render, screen } from '@testing-library/react';
import { todos } from '../Todo';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('TodoList items to be 0', async () => {
    render(<TodoList />);
    expect(screen.queryByRole('listitem')).toBeNull()
  });

  test('TodoList items to be 3', async () => {
    render(<TodoList todos={todos}/>);
    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  });

  test('TodoList onDelete to be called', async () => {
    const onDelete = jest.fn();
    const oneTodos = todos.slice(-1);
    render(<TodoList todos={oneTodos} onDelete={onDelete}/>);
    fireEvent.click(screen.getByLabelText(/delete/i), todos[0]);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  test('TodoList onEdit to be called', async () => {
    const onEdit = jest.fn();
    const oneTodos = todos.slice(-1);
    render(<TodoList todos={oneTodos} onEdit={onEdit}/>);
    fireEvent.click(screen.getByLabelText(/edit/i), todos[0]);
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  test('TodoList onComplete to be called', async () => {
    const onComplete = jest.fn();
    const oneTodos = todos.slice(-1);
    render(<TodoList todos={oneTodos} onComplete={onComplete}/>);
    fireEvent.click(screen.getByRole('checkbox'), todos[0]);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});