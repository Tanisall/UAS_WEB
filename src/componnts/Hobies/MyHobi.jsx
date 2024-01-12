import React, { useRef, useState, useEffect  } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import HobiSlider from './HobiSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';
import axios from 'axios';
import EditHobiModal from './EditHobi';

let clients = [
    {
        name : "Olahraga",
        sub : "Lari | Sepeda | Jogging",
        img_url : "assets/images/lari.jpeg",
        stars : 3,
    },
    {
        name : "Hunting Makanan",
        sub : "Korean food | Japan Food | West Food",
        img_url : "assets/images/makan.jpeg",
        stars : 4,
    },
    {
        name : "Memasak",
        sub : "Disert Food",
        img_url : "assets/images/memasak.jpeg",
        stars : 5,
    },
    {
        name : "Menonton",
        sub : "Horor | Romance",
        img_url : "assets/images/menonton.jpeg",
        stars : 5,
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const [dataHobi, setData] = useState([]);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    useEffect(() => {
        // Lakukan permintaan HTTP ke server di sini
        axios.get('http://localhost:8000/api/hobi')
        .then(response => {
            console.log('masuk sini hobi', response);
            setData(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }, []);
    console.log('dataHobi', dataHobi);

    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = dataHobi.map((item, i) => (
        <HobiSlider item={item} key={i}/>
    ))

    const handleAddHobi = () => {
        setAddModalOpen(true);
      };
    
      const handleCloseAddModal = () => {
        setAddModalOpen(false);
      };

  return (
    <Container id='hobi'>
        <Slide direction="left">
        <HeaderRow>
        <h1>Hobi saya</h1>
        <button onClick={handleAddHobi}>Add</button>
      </HeaderRow>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
        {isAddModalOpen && <EditHobiModal onClose={handleCloseAddModal} />}
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #e21e80;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-star;
  padding: 1rem; 
  color: #fff;

  button {
    background-color: #65B741;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #e21e80;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`