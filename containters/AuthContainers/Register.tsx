import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TextFieldController from "../../components/TextFieldController";

type LogInForm = {
  username: string;
  password: string;
};

function Register() {
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
        ثبت نام در رزروار
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldController
          name="storeName"
          control={control}
          errorElementSx={{ mb: 2, fontSize: 10, color: "error.main" }}
          errors={errors}
          label="نام مغازه"
          rules={{
            required: { value: true, message: "نام مغازه الزامی است." },
          }}
          textFieldSx={{ mb: 1 }}
        />
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
        <FormControl sx={{ my: 2 }}>
          <FormLabel>نوع کاری:</FormLabel>
          <RadioGroup defaultValue="vendor" name="workType">
            <FormControlLabel
              value="vendor"
              control={<Radio size="small" />}
              label="فروشنده محصولات آرایشی و بهداشتی"
            />
            <FormControlLabel
              value="store"
              control={<Radio size="small" />}
              label="مغازه"
            />
          </RadioGroup>
        </FormControl>

        <Box>
          <Button
            fullWidth
            color="warning"
            variant="outlined"
            component="label"
            size="small"
          >
            آپلود مدارک کاری
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Box>

        <Button
          color="info"
          variant="contained"
          type="submit"
          sx={{ mt: 2, width: "100%" }}
        >
          ثبت نام
        </Button>
      </form>
    </Paper>
  );
}

export default Register;
