import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import { Box, Container } from "@mui/material";
import AdminSidebar from "../components/admin/sidebar/adminSidebar";

const AdminLayout = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "grid",
          height: "100vh",
          gridTemplateRows: { lg: "auto auto 1fr auto" },
          gridTemplateColumns: { lg: "repeat(12, 1fr)" },
        }}
      >
        <Box sx={{ gridColumn: { lg: "1 / span 12" } }}>
          <Header />
        </Box>
        <Box sx={{ gridColumn: { lg: "1 / span 12" } }}>
          <Navbar />
        </Box>
        <Box
          sx={{
            gridColumn: { lg: "3 / span 10" },

            pl: { lg: 2 },
            py: { lg: 2 },
            bgcolor: "#efefef",
          }}
        >
          <Outlet />
        </Box>
        <Box
          sx={{
            gridColumn: { lg: "1 / span 2" },
            gridRow: { lg: "3 / span 1" },
            bgcolor: "grey.100",
            display: { xs: "none", lg: "block" },
            width: 300,
            py: { lg: 1 },
          }}
        >
          <AdminSidebar />
        </Box>
        <Box sx={{ bgcolor: "error.main", gridColumn: { lg: "1/ span 12" } }}>
          Footer
        </Box>
      </Box>
    </Container>
  );
};

export default AdminLayout;
