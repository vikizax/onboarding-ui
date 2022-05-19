import React from "react";
import TextField from "../../../components/text-field";
import Button from "../../../components/button";
import { WelcomeContainer } from "./styles";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-workspace");
  };

  return (
    <WelcomeContainer>
      <h2>Welcome! First things first...</h2>
      <p>You can always change them later</p>

      <TextField label="Full Name" />
      <TextField label="Display Name" />

      <Button label="Create Workspace" onClick={handleClick} />
    </WelcomeContainer>
  );
};

export default Welcome;
