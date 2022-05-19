import React from "react";
import { ButtonProps } from "@mui/material/Button";
import { ButtonStyled } from "./styles";

interface IButtonProps extends ButtonProps {
  label: string;
}

const Button = ({ label, ...props }: IButtonProps) => {
  return <ButtonStyled {...props}>{label}</ButtonStyled>;
};

export default Button;
