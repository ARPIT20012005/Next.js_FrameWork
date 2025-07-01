'use client'

import React, { useState } from 'react';

const AddNewUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const addNewUserHandler = async () => {
    try {
      const response = await fetch('api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, email }),
      });

      if (response.ok) {
        alert('User successfully Created');
        setName('');
        setAge('');
        setEmail('');
      } else {
        alert('An Error Occurred while creating the new user');
      }
    } catch (error) {
      alert('An Error Occurred: ' + error.message);
    }
  };

  return (
    <div className="border-2 m-3 p-4">
      <input
        className="border-1"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Please Enter Your Name"
      />
      <br />
      <input
        className="border-1"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Please Enter Your Email"
      />
      <br />
      <input
        className="border-1"
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Please Enter Your Age"
      />
      <br />
      <button
        className="border-2 m-5 p-1.5 bg-gray-300 hover:bg-gray-500"
        onClick={addNewUserHandler}
      >
        Add New User
      </button>
    </div>
  );
};

export default AddNewUser;