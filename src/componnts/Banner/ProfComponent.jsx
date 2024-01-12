import React, { useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const [showMoreText, setShowMoreText] = useState(false);

  const handleMoreButtonClick = () => {
    setShowMoreText(!showMoreText);
  };

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hi! <span className="brand">Saya adalah</span>
          </h4>
          <h1 className="brand">Ta'nis Alhariroh</h1>
          <h3>Mahasiswa | UX/UI Designer | Frontend Developer</h3>
          <p>
          Saya adalah seorang mahasiswa Informatika angkatan 2021 dari Universitas Muhammadiyah Malang
          </p>
          {showMoreText && (
            <p>
             Saya berasal dari kota pesisir yang memiliki sebutan kota udang,
              yaitu Cirebon. Saya memilih program studi Informatika karena saya
              ingin menjadi seorang programmer web dan mobile.
            </p>
          )}
          <button onClick={handleMoreButtonClick}>
            {showMoreText ? "Less" : "More"}
          </button>
        </Texts>
      </Slide>
      <Slide direction="right">
      <GradientBackground>
        <Profile>
          <img
            src="assets/images/profilHeader.png"
            alt="profile"
          />
        </Profile>
        </GradientBackground>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    border-radius: 100px;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #e21e80;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #f08ebf);
    :hover {
      filter: drop-shadow(0px 10px 10px #f08ebf);
    }
  }
`;
const Profile = styled.div`
  img {
    height: 80vw;
    max-height: 45rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
    filter: drop-shadow(5px 0px 10px #f08ebf);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

const GradientBackground = styled.div`
  background: #1e30f3;
  background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
  position: relative;
  height: 50vw;
  width: 50vw;
  border-radius: 5vw;
  max-height: 40rem;
  max-width: 40rem;
`;