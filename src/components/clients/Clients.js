import React, { useState } from 'react';

const Clients = () => {
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos a tu backend o realizar las acciones necesarias con la información del usuario
    console.log(userData);
    // Puedes enviar esta información a tu backend, almacenarla en el estado global, etc.
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          email:
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Clients;