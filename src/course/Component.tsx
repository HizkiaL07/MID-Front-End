import React from "react";

type Props = {
  image: string;
  name: string;
  description: string;
};

const Component = ({ image, name, description }: Props) => {
  return (
    <>
      <div className="w3-container">
        {/* <div className="w3-card-4 w3-center" className="width:100%;max-width:400px"> */}
        <h2>Photo Card</h2>
        <img src={image} alt="Alps" />
        <div className="w3-container w3-center">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
    // <div>{image}, {name}, {description}</div>
  );
};

export default Component;
