import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import data from "../data/data.json";

const SinglePage = () => {
  const { dataId } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    setSelectedUser(data.find((item) => item.id == dataId));
    console.log(selectedUser);
  }, []);

  return (
    <div className="container">
      <div>
        <button className="btn btn-warning m-1">
          <Link to="/" className="text-decoration-none text-dark">back</Link>
        </button>
      </div>

      <table className="table">
        <thead>
        <tr>
          <th className="table-light">name</th>
          <th className="table-light">username</th>
          <th className="table-light">email</th>
          <th className="table-light">address</th>
        </tr>
        </thead>
        {selectedUser && (
          <tbody>
          <tr>
            <td className="table-success">{selectedUser.name}</td>
            <td className="table-success">{selectedUser.username}</td>
            <td className="table-success">{selectedUser.email}</td>
            <td className="table-success">{selectedUser.address.city}</td>
          </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default SinglePage;
