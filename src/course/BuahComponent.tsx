import React from "react";

type Props = {
  photo: string;
  name: string;
  description: string;
};

const BuahComponent = ({ photo, name, description }: Props) => {
  return (
    <>
      <div className="w3-container">
        {/* <div className="w3-card-4 w3-center" className="width:100%;max-width:400px"> */}
        <h2>Photo Card</h2>
        <img src={photo} alt="Alps" />
        <div className="w3-container w3-center">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default BuahComponent;
