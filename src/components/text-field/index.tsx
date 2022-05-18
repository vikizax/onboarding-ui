import React from "react";
import { TextFieldStyled } from "./styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { InputBaseProps } from "@mui/material/InputBase";

interface ITextFieldProps extends InputBaseProps {
  label: string;
}

const TextField = ({ label, ...props }: ITextFieldProps) => {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor={`${label}-text-field`}>
        {label}
      </InputLabel>
      <TextFieldStyled id={`${label}-text-field`} {...props} />
    </FormControl>
  );
};

export default TextField;
