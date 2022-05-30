
const getDate = (date = new Date()) => new Date(date).toISOString().split(/T/)[0];

export class Todo {
  constructor(title, priority, date, id) {
    this.title = title;
    this.id = id === undefined ? Math.random().toString(16).slice(4) : id;
    this.date = date || getDate();
    this.priority = priority;
    this.completed = false;
  }
}

const today = new Date();
const yesterday = new Date();
const tomorrow = new Date();
yesterday.setDate(yesterday.getDate() - 1);
tomorrow.setDate(tomorrow.getDate() + 1);

const dates = [yesterday, today, tomorrow].map(getDate);
const priorites = ['LOW', 'MEDIUM', 'HIGH'];

export const todos = [
  'Submit CV',
  'Attend Phone Screen',
  'Complete coding exercise'
].map((item, i) => new Todo(item, priorites[i], dates[i]));

export const emptyTodo = new Todo('', 'LOW', null, false);


export const getDeadline = date => {
  if (getDate(date) === getDate()) return 'present';
  return new Date(date) > new Date() ? 'future' : 'past';
}


export const sortByDeadline = (a, b) => {
  const expiryDates = {
    past: 1, present: 2, future: 3
  };

  return expiryDates[getDeadline(a.date)] - expiryDates[getDeadline(b.date)]
}