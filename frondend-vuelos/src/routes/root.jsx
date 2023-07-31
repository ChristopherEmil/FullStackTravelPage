import { Outlet, Link, Navigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { ListVuelosContext } from "../context/ListVuelosContext";
import { useContext, useEffect } from "react";
import ProfileMenu from "../components/views/Login/ProfileMenu";
export default function Root() {
  const { isAuth, init } = useContext(ListVuelosContext);
  const userJSON = localStorage.getItem("userdata");
  const user = JSON.parse(userJSON);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {[
        /*  ['Home', 'home'], */
        ["Vuelos", "vuelos"],
        ["Hoteles", "hoteles"],
        ["Coches", "coches"],
        ["Tienda Online", "store"],
      ].map(([title, url], index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to={url} key={index} className="flex items-center">
            {title}
          </Link>
        </Typography>
      ))}
    </ul>
  );
  return (
    <div>
      <div id="sidebar">
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
          <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
              <Link to={"/home"} className="flex items-center">
                Air Planet
              </Link>
            </Typography>
            <div className="hidden lg:block">{navList}</div>

            {isAuth ? 
                <ProfileMenu userdata={user}/>
              
             : (
              <Link
                to={"/login"}
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
              >
                {" "}
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Iniciar session</span>
                </Button>
              </Link>
            )}
          </div>
        </Navbar>
      </div>
      <div id="detail">
        <Outlet></Outlet>
      </div>
      {/*  <Navigate  to="/home" /> */}
    </div>
  );
}
