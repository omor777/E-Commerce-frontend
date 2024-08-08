import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

const AdminLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
