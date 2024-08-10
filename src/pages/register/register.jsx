import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PlaceIcon from "@mui/icons-material/Place";
import Visibility from "@mui/icons-material/visibility";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { validateEmail } from "../../utils/validateEmail";
import validateMobileNumber from "../../utils/validateMobile";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authApi";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

//TODO: Google login

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      address: "",
      password: "",
      gender: "",
    },
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    // console.log(data);
    dispatch(registerUser(data));
    // reset();
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box
        sx={{ bgcolor: "#ffffff", p: 4, borderRadius: 1, mx: "auto" }}
        maxWidth={900}
      >
        <Typography
          sx={{ fontWeight: 500, fontSize: { md: "3rem", lg: "3.5rem" } }}
          variant="h4"
          align="center"
          color="primary"
          mb={3}
        >
          Sing Up
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
          }}
        >
          <TextField
            {...register("name", {
              required: {
                value: true,
                message: "Name field is required!",
              },
              maxLength: {
                value: 15,
                message: "Name must be within 15 character!",
              },
              minLength: {
                value: 3,
                message: "Name at least 3 character need!",
              },
              shouldUnregister: true,
            })}
            label="Name"
            type="text"
            id="name"
            error={errors && errors.name ? true : false}
            helperText={errors && errors.name ? errors.name.message : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            {...register("email", {
              required: {
                value: true,
                message: "Email is required!",
              },
              validate: {
                isMatch: (v) => {
                  const result = validateEmail(v);
                  return result ? undefined : "Email is invalid format!";
                },
              },
            })}
            error={errors && errors.email ? true : false}
            helperText={errors && errors.email ? errors.email.message : ""}
            type="email"
            label="Email"
            autoComplete="true"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...register("mobile", {
              required: {
                value: true,
                message: "Mobile number is required!",
              },
              // validate: (v) => {
              //   const result = validateMobileNumber(v);
              //   return result ? undefined : "Please provide valid phone number";
              // },
            })}
            error={errors && errors.mobile ? true : false}
            label="Mobile"
            type="text"
            helperText={errors && errors.mobile ? errors.mobile.message : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            {...register("address", {
              required: {
                value: true,
                message: "Address is required!",
              },
            })}
            error={errors && errors.address ? true : false}
            helperText={errors && errors.address ? errors.address.message : ""}
            label="Address"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PlaceIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            {...register("password", {
              required: {
                value: true,
                message: "Password is required!",
              },
              validate: {
                minLen: (v) => {
                  return v.length < 6
                    ? "Password at least 6 character!"
                    : undefined;
                },
                maxLen: (v) => {
                  return v.length > 15
                    ? "Password must be less than 15 character!"
                    : undefined;
                },
              },
            })}
            error={errors && errors.password ? true : false}
            helperText={
              errors && errors.password ? errors.password.message : ""
            }
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row defaultValue="male">
              <FormControlLabel
                value="male"
                control={<Radio {...register("gender")} />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio {...register("gender")} />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio {...register("gender")} />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <Button disabled={isSubmitting} variant="contained" type="submit">
            Sing Up
          </Button>
          <Divider variant="middle">
            <Typography variant="subtitle2">OR</Typography>
          </Divider>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Button
              onClick={handleGoogleLogin}
              sx={{ flexGrow: 1 }}
              variant="contained"
              color="error"
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
            <Button
              startIcon={<FacebookOutlinedIcon />}
              sx={{ flexGrow: 1 }}
              variant="contained"
              color="info"
            >
              Facebook
            </Button>
          </Box>
          {/*  */}
        </form>
      </Box>
    </Container>
  );
};

export default Register;
