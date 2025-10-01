import React from "react";

type Props = {
  name: string;
  age: number;
  isStudent: boolean;
};

const PropsComponent = ({ name, age, isStudent }: Props) => {
  return (
    <>
      <h1>
        Hello, nama saya {name}, saya berumur {age} tahun, status saya adalah{" "}
        {isStudent ? "mahasiswa" : "bukan mahasiswa"}
      </h1>
    </>
  );
};

export default PropsComponent;
