import React, { useState } from 'react';
import { Modal, FormControlLabel, Checkbox, Box } from '@mui/material';

const Clients = () => {
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    phone: '',
    email: '',
  });
  const [openModal, setOpenModal] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (policyAccepted) {
      // Aquí puedes manejar la lógica para enviar los datos a tu backend
      console.log(userData);
      // Puedes enviar esta información a tu backend, almacenarla en el estado global, etc.
    } else {
      alert('Debes aceptar la política de privacidad para registrarte.');
    }
  };

  const openPolicyModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
          Email:
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="button" onClick={openPolicyModal}>
          Ver Política de Privacidad
        </button>
        <br />

        <button type="submit">Register</button>
      </form>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ width: 1200, bgcolor: 'background.paper', p: 2 }}>
          <h2>POLÍTICA GENERAL DE TRATAMIENTO DE DATOS PERSONALES</h2>
          <h4>CLIENTES, PROSPECTOS DE CLIENTES, FUNCIONARIOS, PROVEEDORES Y VISITANTES
             ENTRADA EN VIGENCIA: OCTUBRE DE 2023
             ÚLTIMA VERSIÓN: OCTUBRE DE 2023</h4>

          <h3>DEFINICIONES</h3>
          <h4>
Para los efectos de la presente Política de Privacidad, se entiende por:
1.1. Dato personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.
1.2. Dato público: Dato personal que no es semiprivado, privado o sensible. Entre otros, son los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros y documentos públicos.
1.3. Dato Privado: Es el dato que por su naturaleza íntima o reservada sólo es relevante para el Titular.
1.4. Dato personal sensible: Se entiende como datos sensibles aquellos que afecten la intimidad del titular o cuyo uso indebido pueda afectar la intimidad del Titular o la potencialidad de generar su discriminación.
1.5. Dato personal semiprivado: son aquellos datos que no tienen una naturaleza íntima, reservada, ni pública y cuyo conocimiento o divulgación puede interesar no solo a su titular, sino a un grupo de personas o a la sociedad en general. En este caso, para su Tratamiento se requiere a autorización expresa del Titular de la información. Por ejemplo: datos de carácter financiero, datos relativos a las relaciones con las entidades de seguridad social (EPS, AFP, ARL, Cajas de Compensación).
1.6. Base de Datos: Conjunto organizado de Datos Personales que sea objeto de Tratamiento. Para los efectos del presente documento se entiende como Base de Datos, aquella que contiene información de los Titulares.
1.7. Titular: Persona natural cuyos Datos Personales sean objeto de Tratamiento. Para los efectos del presente documento se entiende como Titulares, a los proveedores, contratistas, colaboradores, clientes, usuarios y visitantes de Nombre Pág.
1.8. Responsable del Tratamiento: Es la Persona natural o jurídica de naturaleza pública o privada, que, actuando por ella misma o con otros, decida sobre la Base de Datos y/o el Tratamiento de los datos. Para los efectos de la presente Política para el Tratamiento de Datos Personales se entiende como Responsable del Tratamiento a Nombre Pág.
1.9. Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento (Nombre Pág).
1.10. Tratamiento: Cualquier operación o conjunto de operaciones sobre Datos Personales, tales como la recolección, almacenamiento, uso, circulación o supresión.
        </h4>

          <FormControlLabel
            control={
              <Checkbox
                checked={policyAccepted}
                onChange={(e) => setPolicyAccepted(e.target.checked)}
                name="policyAccepted"
              />
            }
            label="Acepto la Política de Tratamiento de Datos"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Clients;
