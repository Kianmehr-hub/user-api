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

      <table className="table table-dark">
        <tr>
          <th className="h-name">name</th>
          <th className="h-username">username</th>
          <th className="h-email">email</th>
          <th className="h-address">address</th>
        </tr>
        {selectedUser && (
          <tr>
            <td>{selectedUser.name}</td>
            <td>{selectedUser.username}</td>
            <td>{selectedUser.email}</td>
            <td>{selectedUser.address.city}</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default SinglePage;
