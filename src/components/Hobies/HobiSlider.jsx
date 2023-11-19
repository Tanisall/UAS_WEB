import React from 'react'
import styled from 'styled-components'
import { AiFillHeart } from "react-icons/ai";

const HobiSlider = (props) => {
    const {name, sub, img_url, stars} = props.item;
  return (
    <Container>
        <Header>
            <div>
                {Array(stars).fill().map((_, i) => (
                    <span className='star' key={i}>
                        <AiFillHeart/>
                    </span>
                ))}
            </div>
        </Header>
        <Footer>
            <img src={img_url} alt={name} />
            <div className="details">
                <h1>{name}</h1>
                <p>{sub}</p>
            </div>
        </Footer>
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