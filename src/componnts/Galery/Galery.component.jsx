import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import SliderComponent from './Slider';
import { Zoom } from 'react-awesome-reveal';
import axios from 'axios';

const Galery = () => {
const [dataImage, setData] = useState([]);
  useEffect(() => {
    // Lakukan permintaan HTTP ke server di sini
    axios.get('http://localhost:8000/api/galery')
      .then(response => {
        console.log('masuk sini', response);
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  console.log('dataImage', dataImage);
  return (

    <Container id='myGalery'>
        <Zoom>
            <h1>My <span className="brand">Galery</span></h1>
            <p>Berikut ini adalah beberapa foto yang sengaja aku abadikan agar setiap momentnya dapat diingat selamanya</p>
        </Zoom>
        <Slide>
            <SliderComponent dataImage={dataImage}/>
        </Slide>
    </Container>
  )
}

export default Galery;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``