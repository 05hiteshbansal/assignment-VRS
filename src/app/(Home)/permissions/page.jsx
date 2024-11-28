"use client";
import React, { useState, useEffect } from 'react';
import { RadioGroup, Radio } from '@headlessui/react';
import { getPermissions } from "@/models/permissions";
import 'tailwindcss/tailwind.css';
import axios from 'axios';
const Page = () => {
  const [selectedRole, setSelectedRole] = useState('user');
  const [permissionsData, setPermissionsData] = useState([]);

  useEffect(() => {
    const permissions = getPermissions(selectedRole);
    setPermissionsData(permissions);

  }, [selectedRole]);

  useEffect(() => {
    console.log('Permissions Data:', permissionsData);
    
const updatePermissions = async () => {
  const data={
    title:selectedRole,
    permissions:permissionsData
  }
  const prevuserdata = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/permissions` , data)
  console.log(prevuserdata);
}

updatePermissions();
  }, [permissionsData]);

  const handleCheckboxChange = (title, permissionTitle) => {
    setPermissionsData((prevPermissions) =>
      prevPermissions.map((item) =>
        item.title === title
          ? {
              ...item,
              permissions: item.permissions.map((permission) =>
                permission.title === permissionTitle
                  ? { ...permission, value: !permission.value }
                  : permission
              ),
            }
          : item
      )
    );
  };

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'read', label: 'Read' },
    { key: 'write', label: 'Write' },
    { key: 'fullaccess', label: 'Full Access' },
  ];

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Permissions Dashboard</h1>
      
      <div className="text-center text-black lg:text-lg md:text-md mb-10 text-sm">
        Set permissions for different profiles
      </div>
      
      <RadioGroup value={selectedRole} onChange={setSelectedRole} className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-4">
          {['admin', 'manager', 'user'].map((role) => (
            <Radio
              key={role}
              value={role}
              className={({ checked }) =>
                `flex flex-col items-center justify-center w-32 h-32 border-2 rounded-lg cursor-pointer ${
                  checked ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
                }`
              }
            >
              <div className="text-lg font-semibold capitalize">{role}</div>
            </Radio>
          ))}
        </div>
      </RadioGroup>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="py-2 px-4 border-b">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permissionsData.map((item) => (
              <tr key={item.title}>
                <td className="py-2 px-4 border-b">{item.title}</td>
                {item.permissions.map((permission, index) => (
                  <td key={index} className="py-2 px-4 border-b">
                    <input
                      type="checkbox"
                      checked={permission.value}
                      onChange={() => handleCheckboxChange(item.title, permission.title)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;