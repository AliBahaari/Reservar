import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TextFieldController from "../../components/TextFieldController";

type LogInForm = {
  username: string;
  password: string;
};

function LogIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInForm>();

  const onSubmit: SubmitHandler<LogInForm> = (values) => {
    console.log(values);
  };

  return (
    <Paper
      sx={{
        maxWidth: 550,
        mx: "auto",
        mt: 5,
        p: 4,
      }}
      elevation={6}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: 20, mb: 4, textAlign: "center" }}
      >
        ورود به رزروار
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldController
          name="username"
          control={control}
          errorElementSx={{ mb: 2, fontSize: 10, color: "error.main" }}
          errors={errors}
          label="نام کاربری"
          rules={{
            required: { value: true, message: "نام کاربری الزامی است." },
          }}
          textFieldSx={{ mb: 1 }}
        />
        <TextFieldController
          name="password"
          control={control}
          errorElementSx={{ fontSize: 10, color: "error.main" }}
          errors={errors}
          label="رمز عبور"
          rules={{
            required: { value: true, message: "رمز عبور الزامی است." },
          }}
          textFieldSx={{ mb: 1 }}
        />

        <Button
          color="info"
          variant="contained"
          type="submit"
          sx={{ mt: 2, width: "100%" }}
        >
          ورود
        </Button>
      </form>
    </Paper>
  );
}

export default LogIn;
