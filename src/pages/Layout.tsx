import { Outlet, Link } from "react-router-dom";
import Head from "./header/Head";




const Layout = () => {
  return (
    <>
    <header className="header">
    <Head />
    </header>
      <main>
      <Outlet />
      </main>
    </>
  )
};

export default Layout;
