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
        <thead>
        <tr>
          <th className="table-light">Name</th>
          <th className="table-light">Username</th>
          <th className="table-light">Email</th>
          <th className="table-light">Address</th>
        </tr>
        </thead>
        {list.map((data) => (
          <tbody>
          <tr>
            <td className="table-success">
              <Link to={`/${data.id}`} className="text-decoration-none text-dark">{data.name}</Link>
            </td>
            <td className="table-success">{data.username}</td>
            <td className="table-success">{data.email}</td>
            <td className="table-success">{data.address.city}</td>
          </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default App;
