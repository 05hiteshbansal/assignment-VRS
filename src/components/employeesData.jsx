"use client";
import React, { useState } from 'react';

const employeesData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Admin' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Manager' },
  { id: 6, name: 'Eve Evans', email: 'eve@example.com', role: 'Admin' },
  { id: 7, name: 'Frank Green', email: 'frank@example.com', role: 'User' },
  { id: 8, name: 'Grace Hall', email: 'grace@example.com', role: 'Manager' },
  { id: 9, name: 'Hank Ives', email: 'hank@example.com', role: 'Admin' },
  { id: 10, name: 'Ivy Jones', email: 'ivy@example.com', role: 'User' },
  { id: 11, name: 'Jack King', email: 'jack@example.com', role: 'Manager' },
  { id: 12, name: 'Kara Lee', email: 'kara@example.com', role: 'Admin' },
  { id: 13, name: 'Liam Moore', email: 'liam@example.com', role: 'User' },
  { id: 14, name: 'Mia Nelson', email: 'mia@example.com', role: 'Manager' },
  { id: 15, name: 'Noah Owens', email: 'noah@example.com', role: 'Admin' },
];

const roles = ['User', 'Manager', 'Admin'];

const EmployeeList = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [editingId, setEditingId] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState({});

  const handleRoleChange = (id, newRole) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, role: newRole } : employee
      )
    );
  };

  const handleEdit = (employee) => {
    setEditingId(employee.id);
    setEditedEmployee(employee);
  };

  const handleSave = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === editingId ? editedEmployee : employee
      )
    );
    setEditingId(null);
    setEditedEmployee({});
  };

  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-center mb-8">Employee List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2 px-4 border-b">
                  {editingId === employee.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editedEmployee.name}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    employee.name
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingId === employee.id ? (
                    <input
                      type="email"
                      name="email"
                      value={editedEmployee.email}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-1"
                    />
                  ) : (
                    employee.email
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingId === employee.id ? (
                    <select
                      name="role"
                      value={editedEmployee.role}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-1"
                    >
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  ) : (
                    employee.role
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingId === employee.id ? (
                    <button
                      onClick={handleSave}
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(employee)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;