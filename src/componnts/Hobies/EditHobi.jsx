import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const EditHobiModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    sub: '',
    image_hobi: '',
    stars: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'stars' ? parseInt(value, 10) : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the database using Axios
    console.log('formData',formData);
    axios.post('http://localhost:8000/api/addHobi', formData)
      .then(response => {
        console.log('Hobi added successfully:', response.data);
        // Optionally, you can close the modal after successful submission
        onClose();
      })
      .catch(error => {
        console.error('Error adding hobi: ', error);
        console.error('Response:', error.response);
        console.error('Request:', error.request);
        console.error('Config:', error.config);
      });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Edit Hobi</h2>
        <form onSubmit={handleSubmit}>
          <StyledLabel>
            Name:
            <StyledInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledLabel>
            Sub:
            <StyledInput
              type="text"
              name="sub"
              value={formData.sub}
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledLabel>
            Image Hobi:
            <StyledInput
              type="text"
              name="image_hobi"
              value={formData.image_hobi}
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledLabel>
            Star:
            <StyledInput
              type="number"
              name="stars"
              value={formData.stars}
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledButton type="submit">Submit</StyledButton>
        </form>
        <StyledButton onClick={onClose}>Kembali</StyledButton>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const StyledLabel = styled.label`
  display: block;
  color: #e21e80; /* Pink color */
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: #e21e80; /* Pink color */
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

export default EditHobiModal;
