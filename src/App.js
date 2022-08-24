import data from "../src/data/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
    console.log(list);
  }, [list]);

  return (
    <div className="container">
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        {list.map((data) => (
          <tr>
            <td>
              <Link to={`/${data.id}`} className="table-success">
                {data.name}
              </Link>
            </td>
            <td className="table-success">{data.username}</td>
            <td className="email">{data.email}</td>
            <td className="address">{data.address.city}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
