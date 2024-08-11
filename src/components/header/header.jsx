import { Box, Button, Container, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="xl">
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Button component={NavLink} to="/register" sx={{ color: "#fff" }}>
            Register
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ bgcolor: "#fff" }}
            flexItem
          />
          <Button component={NavLink} to="/login" sx={{ color: "#fff" }}>
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
