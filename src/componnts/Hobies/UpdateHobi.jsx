import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UpdateHobiModal = ({ onClose, dataHobi }) => {
    console.log('data here', dataHobi);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        sub: '',
        image_hobi: '',
        stars: 0,
    });

    useEffect(() => {
        if (dataHobi) {
            setFormData({
                id: dataHobi.id || '',
                name: dataHobi.name || '',
                sub: dataHobi.sub || '',
                image_hobi: dataHobi.image_hobi || '',
                stars: dataHobi.stars || 0,
            });
        }
    }, [dataHobi]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === 'stars' ? parseInt(value, 10) : value;
        setFormData({
            ...formData,
            [name]: updatedValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Panggil API untuk update hobi
            const response = await axios.put(`http://localhost:8000/api/hobi/update/${formData.id}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Hobi berhasil diupdate');
                onClose();
            } else {
                console.error('Gagal mengupdate hobi');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <ModalOverlay>
            <ModalContent>
                <h2>Edit Hobi</h2>
                <form onSubmit={handleSubmit}>
                    {/* Hidden input untuk menyimpan nilai id */}
                    <input type="hidden" name="id" value={formData.id} />

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
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
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

export default UpdateHobiModal;
