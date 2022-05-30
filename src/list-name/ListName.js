
import { useState } from 'react';
import './ListName.scss';

const ListName = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('Recruitment Process');

  return (
    <header className="App-header">
      {
        isEdit ? (
          <>
            <input type="text" onChange={e => setName(e.target.value)} value={name} />
            <i className="icon" onClick={() => setIsEdit(false)}>✔️</i>
          </>
        ) : (
          <>
            <h3 className="App-header__title">{name}</h3>
            <i className="icon" onClick={() => setIsEdit(true)}>✏️</i>
          </>
        )
      }

    </header>
  );
}

export default ListName;