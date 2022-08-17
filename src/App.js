import data from '../src/data/data.json'
import { useEffect, useState } from 'react';
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
        {list.map((data) => 
        <tr>
          <td><Link to={`/${data.id}`} className='name'>{data.name}</Link></td>
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