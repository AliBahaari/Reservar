import { ErrorMessage } from "@hookform/error-message";
import { SxProps, TextField, Theme, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type TextFieldControllerProps = {
  name: string;
  control: Control<any>;
  rules?: any;
  label?: string;
  textFieldSx?: SxProps<Theme>;
  errorElementSx?: SxProps<Theme>;
  errors?: any;
};

function TextFieldController({
  control,
  name,
  textFieldSx,
  errorElementSx,
  errors,
  label,
  rules,
}: TextFieldControllerProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field }) => (
          <TextField
            size="small"
            label={label}
            fullWidth
            sx={textFieldSx}
            {...field}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Typography sx={errorElementSx}>{message}</Typography>
        )}
      />
    </>
  );
}

export default TextFieldController;
