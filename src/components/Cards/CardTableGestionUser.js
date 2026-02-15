import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

import {
  getAllUsers,
  deleteUser,
  updateUser,
  addUesr,
} from "../../services/apiUsers";

export default function CardTable({ color }) {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [showModalEdit, setShowModalEdit] = React.useState(false);

  const getUsers = async () => {
    await getAllUsers()
      .then((response) => {
        setUsers(response.data.userList);
        console.log("getAllUsers", response.data.userList);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id)
      .then((response) => {
        console.log("User deleted successfully");
        getUsers(); // Refresh the user list after deletion
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };

  const handleAddUser = async () => {
    await addUesr(newUser)
      .then((response) => {
        console.log("User added successfully");
        getUsers(); // Refresh the user list after adding
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    setShowModal(false);
  };

  const handleUpdateUser = async () => {
    await updateUser(newUser._id, newUser)
      .then((response) => {
        console.log("User updated successfully");
        getUsers(); // Refresh the user list after updating
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    setShowModalEdit(false);
  };
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Gestion Users
              </h3>
              <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Open regular modal
              </button>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  First Name , Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Age
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Role
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <img
                      src={`http://localhost:5000/images/Users/${user.user_image}`}
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                    ></img>{" "}
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light"
                          ? "text-blueGray-600"
                          : "text-white")
                      }
                    >
                      {user.firstName} {user.lastName}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.email}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.age}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {user.role}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button
                      className="bg-indigo-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModalEdit(true);
                        setNewUser(user);
                      }}
                    >
                      update
                    </button>
                    <button
                      className="bg-red-700 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleDelete(user._id)}
                    >
                      delete
                    </button>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdown />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              //  onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-16 mx-16 max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-black ">
                      Add User
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="flex gap-4">
                      <div className="mb-3 pt-0 mr-4 ml-2 w-1/3">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                          name="firstName"
                          //value={newUser.firstName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3 pt-0 mr-4 w-1/3">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                          name="lastName"
                          //value={newUser.lastName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3 pt-0 mr-2 w-1/3">
                        <input
                          type="text"
                          placeholder="Age"
                          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                          name="age"
                          //value={newUser.age}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="mb-3 mr-2 ml-2 pt-0">
                      <input
                        type="text"
                        placeholder="Email"
                        class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                        name="email"
                        //value={newUser.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="mb-3 mr-2 ml-2 pt-0">
                      <input
                        type="Password"
                        placeholder="Password"
                        class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                        name="password"
                        //value={newUser.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleAddUser()}
                    >
                      Add User
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        {showModalEdit ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              //  onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-16 mx-16 max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-black ">
                      Update User
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="flex gap-4">
                      <div className="mb-3 pt-0 mr-4 ml-2 w-1/3">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                          name="firstName"
                          value={newUser.firstName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3 pt-0 mr-4 w-1/3">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                          name="lastName"
                          value={newUser.lastName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3 pt-0 mr-2 w-1/3">
                        <input
                          type="text"
                          placeholder="Age"
                          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                          name="age"
                          value={newUser.age}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModalEdit(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleUpdateUser()}
                    >
                      Update User
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
