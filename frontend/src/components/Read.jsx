import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../features/userDetailSlice";

const Read = () => {
  const users = useSelector(selectUsers)
  return (
    <div>
      <h2 className="text-center">All Data</h2>
      {users &&
        users.map((data) => (
          <div key={data.id} className="card w-50 mx-auto my-2">
            <div className="card-body">
              <h5 className="card-title text-center">{data.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                {data.email}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                {data.age}
              </h6>
              <p className="card-text text-center">{data.gender}</p>
              
              <button>
              <Link className="card-link"to={`/edit/${data.id}`}>Edit User</Link>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Read;
