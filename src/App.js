import data from '../src/data/data.json'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import './App.css'
import SinglePage from './components/SinglePage';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data)
    console.log(list)
  }, [list])

  return(
    <div className='spa'>
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        <Routes>
        <Route path='/:dataId' element={<SinglePage />} />
        </Routes>
        {list.map((data) => 
        <tr>
          <Link to={`/${data.id}`}><td className='name'>{data.name}</td></Link>
          <td className='username'>{data.username}</td>
          <td className='email'>{data.email}</td>
          <td className='address'>{data.address.city}</td>
        </tr>
        )}
      </table>
    </div>
  );
}

export default App;