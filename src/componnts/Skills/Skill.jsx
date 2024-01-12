import React from "react";
import { MdDesignServices } from "react-icons/md";
import { BiCalendarEdit } from "react-icons/bi";
import { DiAndroid } from "react-icons/di";
import styled from "styled-components";
import Card from "./Cards";
import { Slide } from "react-awesome-reveal";

const Skill = () => {
  return (
    <Container id="skill">
      <Slide direction="down">
        <h1>My Skill</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"UI/UX Designer"}
            disc={`UI UX designer adalah mereka yang bertanggung jawab melakukan desain user interface (UI) dan user experience (UX) sebuah produk digital. User interface adalah antarmuka yang memungkinkan user berinteraksi dengan sebuah produk dan berfokus pada tampilan visual sebuah produk (berkaitan dengan tema, warna, grafis, dan sebagainya). Sementara itu, user experience adalah desain membuat produk yang nyaman dan memudahkan user saat menggunakan produk tersebut (seperti tentang keberadaan dan fungsi tombol, pilihan kata untuk tombol tertentu, dan sebagainya).`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={BiCalendarEdit}
            title={"Agile Scrum"}
            disc={`Agile adalah sebuah metode software development yang mencakup website, web application, dan mobile application yang berfokus untuk menghasilkan software berkualitas tinggi secara konsisten dengan mengurangi biaya proyek dan meningkatkan nilai jual suatu bisnis. Secara definisi, Agile dapat diartikan sebagai sebuah pendekatan pada project management dengan menggunakan teknik iterasi dan bertahap secara dinamis (atau dikenal dengan Sprint) dalam proses pembuatan suatu produk.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={DiAndroid}
            title={"Software Engineer"}
            disc={`Programming bisa dianggap sebagai kolaborasi antara manusia dan komputer, di mana manusia membuat instruksi (berbentuk kode) dalam bahasa yang dapat dimengerti komputer, yakni bahasa pemrograman. Proses ini dimulai ketika seorang programmer menulis kode (berupa satu set huruf, angka, dan karakter lain). Selanjutnya, compiler (program komputer untuk menerjemahkan source code) mengubah setiap baris kode menjadi bahasa yang bisa dipahami oleh komputer. Dari situ, komputer memindai kode untuk melakukan serangkaian tugas.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Skill;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;