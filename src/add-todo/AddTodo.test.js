import { fireEvent, render, screen } from '@testing-library/react';
import { emptyTodo, todos } from '../Todo';
import AddTodo from './AddTodo';

describe('AddTodo', () => {
  test('renders AddTodo component', () => {
    render(<AddTodo todo={emptyTodo}/>);
    expect(screen.getByText(/Add new todo/i)).toBeInTheDocument();
  });

  test('AddTodo check form labels to be present ', async () => {
    render(<AddTodo todo={emptyTodo}/>);
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/priority/i)).toBeInTheDocument()
    expect(screen.getByText(/expiry\sdate/i)).toBeInTheDocument()
  });

  test('AddTodo check form elements to be present ', async () => {
    render(<AddTodo todo={todos[0]}/>);
    expect(screen.getByRole('textbox')).toHaveValue('Submit CV');
    expect(screen.getByRole('combobox')).toHaveValue('LOW');
    expect(screen.getByDisplayValue(todos[0].date)).toHaveValue(todos[0].date);
  });

});