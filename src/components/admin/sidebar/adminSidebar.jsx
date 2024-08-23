import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton selected={pathname === "/"} component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              selected={pathname === "/add-product"}
              component={Link}
              to="/add-product"
            >
              <ListItemIcon>
                <LibraryAddCheckOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </nav>
    </Box>
  );
};

export default AdminSidebar;
