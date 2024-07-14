import React from "react";
import { InputAdornment, OutlinedInput, SxProps } from "@mui/material";
import { typoSystem } from "@/lib/theme/typoSystem";

import ButtonWithIcon from "../atoms/ButtonWithIcon";

export interface EmailInput {
  handleSubscribe: () => void;
  placeholder?: string;
  inputValue?: string;
  textChange: (val: string) => void;
  customInputSxProps?: SxProps;
}

export const EmailInput = ({
  handleSubscribe,
  placeholder,
  inputValue,
  textChange,
  customInputSxProps,
}: EmailInput) => {
  return (
    <OutlinedInput
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubscribe();
        }
      }}
      placeholder={placeholder}
      value={inputValue}
      inputProps={{
        style: {
          ...typoSystem.body3MontBold,
        },
      }}
      onChange={(e) => {
        const textValue = e.target.value;
        // Check if the input contains only spaces.
        if (/^\s+$/.test(textValue)) {
          textChange(textValue.trim()); // Trim spaces.
        } else {
          textChange(textValue); // Keep input as is.
        }
      }}
      sx={{
        height: 45,
        borderRadius: 15,
        "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          border: `1px solid #E2E2E2`,
        },
        "& input::placeholder": {
          ...typoSystem.body3MontBold,
        },
        backgroundColor: "#F5F5F5",
        "&.MuiOutlinedInput-root .MuiOutlinedInput-input": {
          mx: 3,
        },
        "& .MuiInputAdornment-root": {
          height: "auto",
        },
        ...customInputSxProps,
      }}
      style={{
        minHeight: "45px",
        padding: 0,
      }}
      endAdornment={
        <InputAdornment position="end">
          <ButtonWithIcon
            buttonText="Subscribe"
            backgroundColor={"#F16C5C"}
            variant="contained"
            textVariant="body3MontBold"
            customStyles={{
              px: 5,
              py: 3,
              borderRadius: 15,
            }}
          />
        </InputAdornment>
      }
    />
  );
};
