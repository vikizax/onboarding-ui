import React from "react";
import { TextFieldStyled, TextFieldContainer } from "./styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { InputBaseProps } from "@mui/material/InputBase";

interface ITextFieldProps extends InputBaseProps {
  label: string;
  subLabel?: string;
  leadingTextFieldText?: string;
}

const TextField = ({
  label,
  subLabel,
  leadingTextFieldText,
  ...props
}: ITextFieldProps) => {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor={`${label}-text-field`}>
        {label}
        <span>{subLabel}</span>
      </InputLabel>
      <TextFieldContainer>
        {leadingTextFieldText && (
          <TextFieldStyled value={leadingTextFieldText} disabled />
        )}
        <TextFieldStyled id={`${label}-text-field`} {...props} />
      </TextFieldContainer>
    </FormControl>
  );
};

export default TextField;
