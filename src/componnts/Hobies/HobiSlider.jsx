import React, {useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiFillHeart } from "react-icons/ai";
import UpdateHobiModal from './UpdateHobi';

const HobiSlider = (props) => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const {id, name, sub, image_hobi, stars} = props.item;
    const toIntStars = parseInt(stars, 10);
const handleDelete = async () => {
    try {
      // Panggil API untuk menghapus hobi
      const response = await fetch(`http://localhost:8000/api/delete/id/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Hobi berhasil dihapus');
      } else {
        console.error('Gagal menghapus hobi');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditHobi = () => {
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };
  return (
    <Container>
        <Header>
            <div>
                {Array(toIntStars).fill().map((_, i) => (
                    <span className='star' key={i}>
                        <AiFillHeart/>
                    </span>
                ))}
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEditHobi}>Edit</button>
            </div>
        </Header>
        <Footer>
            <img src={`data:image/jpeg;base64,${image_hobi}`} alt={name} />
            <div className="details">
                <h1>{name}</h1>
                <p>{sub}</p>
            </div>
        </Footer>
        {isEditModalOpen && <UpdateHobiModal dataHobi={props.item} onClose={handleCloseEditModal} />}
    </Container>
  )
}

export default HobiSlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #f08ebf;
        opacity: 0.7;
    }

    .star{
        color: #e21e80;
        font-size: 1.3rem;
    }

    button {
        background-color: #e21e80;
        color: #fff;
        border: none;
        border-radius: 20px;
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 10rem;
        height: 10rem;
        border-radius: 20px;
        object-fit: cover;
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`