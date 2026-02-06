import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <Navbar />
      <main className="px-6 py-6 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

