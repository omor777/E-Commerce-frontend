import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/visibility";
import Google from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box
        sx={{
          bgcolor: "#fff",
          maxWidth: 900,
          p: 4,
          mx: "auto",
          borderRadius: 1,
        }}
      >
        <Typography
          sx={{ fontWeight: 500, fontSize: { md: "3rem", lg: "3.5rem" } }}
          variant="h4"
          align="center"
          color="primary"
          mb={3}
        >
          Sing In
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
          }}
        >
          <TextField
            label="Email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
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

          <Button variant="contained">Sing In</Button>
          <Divider variant="middle">
            <Typography variant="subtitle2">OR</Typography>
          </Divider>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Button
              sx={{ flexGrow: 1 }}
              variant="contained"
              color="error"
              startIcon={<Google />}
            >
              Google
            </Button>
            <Button
              sx={{ flexGrow: 1 }}
              variant="contained"
              startIcon={<FacebookOutlinedIcon />}
              color="info"
            >
              Facebook
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
