import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListOfUsers } from "../actions/userActions";

const Users = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(fetchListOfUsers());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        "Loading users..."
      ) : error ? (
        error
      ) : (
        <table>
          <thead>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
              {users &&
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </tr>
                ))}
            </tbody>
          </thead>
        </table>
      )}
    </>
  );
};

export default Users;
