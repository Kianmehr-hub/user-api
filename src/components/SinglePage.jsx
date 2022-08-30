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
    <div className="container mt-5">
      <div>
        <Link
          to="/"
          className=" btn btn-success text-white fw-bold text-decoration-none text-dark"
        >
          back
        </Link>
      </div>
      <div className="card w-50 text-center mt-5">
        <div className="card-header h4">Person Info</div>
        <div className="card-body">
          {selectedUser && (
            <div>
              <div className="d-flex mt-2 justify-content-between align-items-center">
                <div className="">Name </div>
                <div className="text-muted fst-italic">{selectedUser.name}</div>
              </div>
              <hr />
              <div className="d-flex mt-2 justify-content-between align-items-center">
                <div className="">Username </div>
                <div className="text-muted fst-italic">{selectedUser.username}</div>
              </div>
              <hr />
              <div className="d-flex mt-2 justify-content-between align-items-center">
                <div className="">Email </div>
                <div className="text-muted fst-italic">{selectedUser.email}</div>
              </div>
              <hr />
              <div className="d-flex mt-2 justify-content-between align-items-center">
                <div className="">Location </div>
                <div className="text-muted fst-italic">{selectedUser.address.city}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <table className="table">
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
      </table> */}
    </div>
  );
};

export default SinglePage;
