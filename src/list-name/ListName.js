
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
            <input type="text" name="listname" onChange={e => setName(e.target.value)} value={name} />
            <i className="icon" onClick={() => setIsEdit(false)} role="button" aria-label="Update">✔️</i>
          </>
        ) : (
          <>
            <h3 className="App-header__title">{name}</h3>
            <i className="icon" onClick={() => setIsEdit(true)} role="button" aria-label="Edit" >✏️</i>
          </>
        )
      }

    </header>
  );
}

export default ListName;